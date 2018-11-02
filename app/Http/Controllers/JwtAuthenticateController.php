<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;
use App\User;
use App\Investor;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Auth;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenBlacklistedException;

use Log;
use App\Repository\Transformers\UserTransformer;
use \Illuminate\Http\Response as Res;
use Validator;
use Illuminate\Database\QueryException as QueryException;

use Image;
use File;
use Storage;

class JwtAuthenticateController extends ApiController {
    
    /**
     * @var \App\Repository\Transformers\UserTransformer
     * */
    protected $userTransformer;


    public function __construct(userTransformer $userTransformer)
    {

        $this->userTransformer = $userTransformer;

    }

    public function index() {
        return response()->json(['auth' => Auth::user(), 'users' => User::all()]);
    }

    public function authenticate(Request $request) {

        $rules = array(
            'email' => 'required|email',
            'password' => 'required',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }


        $credentials = $request->only('email', 'password');

        try {
        // verify the credentials and create a token for the user
        if (!$token = JWTAuth::attempt($credentials)) {
        return $this->respondInvalidCredentials();
        }
        
        } catch (TokenInvalidException $e) {
            
        Log::emergency($e);
        return $this->respondWithsessionError();
        } catch (TokenBlacklistedException $e) {
            
        Log::emergency($e);
        return $this->respondWithsessionError();
        }catch (TokenExpiredException $e) {
        
        Log::emergency($e);
        return $this->respondWithsessionError();
        }catch (JWTException $e) {
            
        Log::emergency($e);
        return $this->respondInternalError();
        }

        
        $user = JWTAuth::toUser($token);
        $user->auth_key = $token;
        $user->login_count = $user->login_count + 1;
        
        try {
            $user->save();
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }
        
        try {
        $role = Role::where('id', $user->role)->first();
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }
        
        try {
            
        if(isset($role))
        {
        $role_permissions = $role->perms()->get();
        }
        
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }
        
        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Logged In Successfully!',
                    'data' => $this->userTransformer->transform($user),
                    'roles' => $user->roles->toArray(),
                    'permissions' => $role_permissions
        ]);
        //return response()->json(compact('token'));
    }
    
    private function _login($email, $password) {

        $credentials = ['email' => $email, 'password' => $password];

        if (!$token = JWTAuth::attempt($credentials)) {

            return $this->respondWithError("User does not exist!");
        }

        try {
            $user = JWTAuth::toUser($token);
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }

        $user->auth_key = $token;
        $user->login_count = $user->login_count + 1;
        try {
            $user->save();
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }
        
        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Login successful!',
                    'data' => $this->userTransformer->transform($user),
        ]);
    }

    public function createRole(Request $request) {
        
        $rules = array(
            'role_name' => 'required|unique:role',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }
        
        $role = new Role();
        $role->role_name = $request->input('role_name');
        $role->save();

        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Role Created successful!'
        ]);
    }

    public function createPermission(Request $request) {
        
        $rules = array(
            'name' => 'required|unique:permissions',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }

        $permission = new Permission();
        $permission->name = $request->input('name');
        $permission->save();

        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Permission Created successful!'
        ]);
    }

    public function assignRole(Request $request) {
        
        $rules = array(
            'user_id' => 'required',
            'role_id' => 'required',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }
        
        $user = User::where('id', '=', $request->input('user_id'))->first();

        $role = Role::where('id', '=', $request->input('role_id'))->first();
        //$user->attachRole($request->input('role'));
        $user->roles()->attach($role->id);

        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Role Assigned successful!'
        ]);
    }

    public function attachPermission(Request $request) {
        
        $rules = array(
            'role_id' => 'required',
            'permission_id' => 'required',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }
        
        $role = Role::where('id', '=', $request->input('role_id'))->first();
        $permission = Permission::where('id', '=', $request->input('permission_id'))->first();
        $role->attachPermission($permission);

        return $this->respond([
                    'status' => 'success',
                    'status_code' => Res::HTTP_OK,
                    'message' => 'Permisson Assigned successful!'
        ]);
    }
    
    public function createUser(Request $request) {

        $rules = array(
            'firstname' => 'required|max:255|regex:/^[a-zA-Z ]*$/',
            'lastname' => 'required|max:255|regex:/^[a-zA-Z ]*$/',
            'mobile' => 'required|regex:/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/|unique:user',
            'email' => 'required|email|max:255|unique:user',
            'password' => 'required|min:6',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        } else {

            //DB::enableQueryLog();
            try {
                $user = User::create([
                            'username' => $request['firstname'],
                            'first_name' => $request['firstname'],
                            'last_name' => $request['lastname'],
                            'mobile' => $request['mobile'],
                            'email' => $request['email'],
                            'role' => 3,
                            'mobile_verify' => 1,
                            'login_count' => 1,
                            'status' => 10,
                            'auth_key' => 'NULL',
                            'password' => \Hash::make($request['password']),
                            'password_hash' => \Hash::make($request['password']),
                ]);
            } catch (QueryException $e) {
                Log::emergency($e);
                return $this->respondInternalErrors();
            } catch (\PDOException $e) {
                Log::emergency($e);
                return $this->respondInternalErrors();
            }
            //dd(DB::getQueryLog());

            return $this->respond([
                        'status' => 'success',
                        'status_code' => Res::HTTP_OK,
                        'message' => 'User Created SuccessFully!',
            ]);
        }
    }
    
    public function partnersList(Request $request) {
        
        try {
        $investors = Investor::all();
        } catch (QueryException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        } catch (\PDOException $e) {
            Log::emergency($e);
            return $this->respondInternalErrors();
        }
        
        return $this->respond([
                        'status' => 'success',
                        'status_code' => Res::HTTP_OK,
                        'message' => 'Investors List!',
                        'data' => $investors
            ]);
        
    }
    
    public function cteatePartner(Request $request) {
        
        
        $rules = array(
            'name' => 'required|max:255|regex:/^[a-zA-Z ]*$/',
            'shortname' => 'sometimes|nullable|max:255|regex:/^[a-zA-Z ]*$/',
            'partner_image' => 'sometimes|nullable|regex:/^data:image\/(\w+);base64,/',
            'description' => 'sometimes|nullable|regex:/^[a-zA-Z0-9,.\-\ ]*$/',
            'user_id' => 'sometimes|nullable|numeric',
            'address_line_1' => 'sometimes|nullable|regex:/^[a-zA-Z0-9,.\-\ ]*$/',
            'address_line_2' => 'sometimes|nullable|regex:/^[a-zA-Z0-9,.\-\ ]*$/',
            'address_area' => 'sometimes|nullable|regex:/^[a-zA-Z0-9,.\-\ ]*$/',
            'land_mark' => 'sometimes|nullable|regex:/^[a-zA-Z0-9,.\-\ ]*$/',
            'city' => 'sometimes|nullable|regex:/^[a-zA-Z ]*$/',
            'state' => 'sometimes|nullable|regex:/^[a-zA-Z ]*$/',
            'pincode' => 'sometimes|nullable|numeric',
            'isactive' => 'sometimes|nullable',
            'ispartner' => 'sometimes|nullable|boolean',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }
        
        $investor = new Investor;
        
        if (isset($request['partner_image'])) {

            try {
                $path_folder = public_path() . '/partners/'.$investor->id;
                if (!File::exists($path_folder)) {
                    $result = File::makeDirectory($path_folder, 0777);
                }
                $partner_url = $investor->id.'_' .time().".png";
                $partner_path = $path_folder . '/' . $partner_url;
            } catch (\Exception $e) {
                Log::emergency($e);
                return $this->respondInternalErrors();
            }

            try {
                Image::make(file_get_contents($request['partner_image']))->save($partner_path);
            } catch (\Exception $e) {
                Log::emergency($e);
                return $this->respondInternalErrors();
            }
            
        }
        
    }

}
