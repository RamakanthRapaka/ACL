<?php

use Illuminate\Http\Request;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

Route::group(['middleware' => 'cors', 'prefix' => '/v1'], function () {

    Route::post('/login', 'UserController@authenticate');

    Route::post('/register', 'UserController@register');

    Route::get('/logout/{api_token}', 'UserController@logout');


    //Login route
    Route::post('/authenticate', 'JwtAuthenticateController@authenticate');

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,create-users']], function() {
        // Protected route
        Route::post('/createusers', 'JwtAuthenticateController@createUser');
    });

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,list-users']], function() {
        // Protected route
        Route::get('/users', 'JwtAuthenticateController@index');
    });

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,create-roles']], function() {
        // Protected route
        Route::post('/createroles', 'JwtAuthenticateController@createRole');
    });

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,create-permission']], function() {
        // Route to create a new permission
        Route::post('/permission', 'JwtAuthenticateController@createPermission');
    });

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,assigne-roles']], function() {
        // Route to assign role to user
        Route::post('/assign-role', 'JwtAuthenticateController@assignRole');
    });

    // API route group that we need to protect
    Route::group(['middleware' => ['ability:sadmin,assigne-permissions']], function() {
        // Route to attache permission to a role
        Route::post('/attach-permission', 'JwtAuthenticateController@attachPermission');
    });
});


