<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Task;
use App\Models\Status;
use App\Models\Priority;

class InfoController extends Controller
{
    public function getWorkers()
    {
    	$id_user = Auth::guard('api')->user()->id;
    	$workers = User::where('boss_id', $id_user)->get();

    	if(count($workers) === 0) {
    		$workers = null;
    	}

    	return response()->json(['workers' => $workers], 200);
    }

    public function getTasks()
    {
    	$id_user = Auth::guard('api')->user()->id;
    	$status_user = Auth::guard('api')->user()->status;

    	if($status_user) {
    		$tasks = Task::where('user_creator_id', $id_user)->get();
    	}else {
    		$tasks = Task::where('user_worker_id', $id_user)->get();
    	}

    	return response()->json(['tasks' => $tasks], 200);
    }

    public function getStatuses()
    {
    	$statuses = Status::all();

    	return response()->json(['statuses' => $statuses], 200);
    }

    public function getPriorities()
    {
    	$priorities = Priority::all();

    	return response()->json(['priorities' => $priorities], 200);
    }

    public function getAllUsers()
    {
    	$users = User::get(['id', 'name', 'login', 'surname', 'boss_id']);

    	return response()->json(['users' => $users], 200);
    }
}
