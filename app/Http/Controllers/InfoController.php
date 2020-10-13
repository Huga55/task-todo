<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InfoController extends Controller
{
    public function getInfo()
    {
    	//Auth::loginUsingId(1);
    	$user = Auth::user();
    	return response()->json(["result" => $user], 200);
    }
}
