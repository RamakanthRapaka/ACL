<?php

namespace App\Http\Controllers;

use App\Permission;
use App\Role;
use App\User;
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
            'name' => 'required|unique:roles',
        );

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {

            return $this->respondValidationError('Fields Validation Failed.', $validator->errors());
        }
        
        $role = new Role();
        $role->name = $request->input('name');
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

}
