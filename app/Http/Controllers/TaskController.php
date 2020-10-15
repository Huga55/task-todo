<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;

class TaskController extends Controller
{
    public function change(Request $request)
    {
    	$data = $request->all()['data'];
    	$id = $data['id'];

    	$task = Task::find($id);
    	$task->title = $data['title'];
    	$task->describe = $data['describe'];
    	$task->priority_id = $data['priority_id'];
    	$task->status_id = $data['status_id'];
    	$task->date_end = date("Y-m-d", strtotime($data['date_end']));
    	$task->save();

    	return response()->json(["result" => true], 200);
    }

    public function create(Request $request)
    {
    	$data = $request->all()['data'];

    	$task = new Task;
    	$task->title = $data['title'];
    	$task->describe = $data['describe'];
    	$task->priority_id = $data['priority_id'];
    	$task->status_id = $data['status_id'];
    	$task->date_end = date("Y-m-d", strtotime($data['date_end']));
    	$task->user_worker_id = $data["user_worker_id"];
    	$task->user_creator_id = $data["user_creator_id"];
    	$task->save();

    	return response()->json(["result" => $data], 200);
    }
}
