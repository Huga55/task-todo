<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function checkUser()
    {
    	if(Auth::check()) {
    		return response()->json(["result" => true], 200);
    	}
    	return response()->json(["result" => false], 200);
    }

    public function authUser(Request $request)
    {
    	$login = $request->login;
    	$password = md5($request->password);

    	if(count(User::where('login', $login)->where('password', $password)->get())) {
    		return response()->json(["result" => true], 200);
    	}

    	return response()->json(["result" => "Неверный логин или пароль"], 200);
    }
}
