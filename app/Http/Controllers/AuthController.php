<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\User;

class AuthController extends Controller
{
    public function checkUser(Request $request)
    {
        $user = Auth::guard('api')->user();

    	if($user) {
    		return response()->json(["result" => $user], 200);
    	}
    	return response()->json(["result" => false], 200);
    }

    public function authUser(Request $request)
    {
    	$login = $request->login;
    	$password = md5($request->password);

    	if(count(User::where('login', $login)->where('password', $password)->get())) {
            $token = Str::random(60);
            User::where('login', $login)->update(['api_token' => $token]);

            return response()->json(["token" => $token, 'result' => true], 200);
    	}

    	return response()->json(["result" => false, 'text' => "Неверный логин или пароль"], 200);
    }

    public function logout(Request $request, $user_id)
    {
        $user = User::find($user_id);
        $user->api_token = null;
        $user->save();

        return response()->json(['data' => "User logged out"], 200);
    }
}
