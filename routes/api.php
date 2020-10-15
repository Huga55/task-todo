<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::get('auth/me', 'AuthController@checkUser');
Route::post('auth/login', 'AuthController@authUser');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('user/workers', 'InfoController@getWorkers');
    Route::get('user/tasks', 'InfoController@getTasks');

    Route::get('app/statuses', 'InfoController@getStatuses');
    Route::get('app/priorities', 'InfoController@getPriorities');
    Route::get('app/users', 'InfoController@getAllUsers');

    Route::post('task/create', 'TaskController@create');
    Route::put('task/change', 'TaskController@change');

    Route::delete('auth/logout/{id}', 'AuthController@logout');
});


//Route::get('/auth/me', 'AuthController@checkUser');