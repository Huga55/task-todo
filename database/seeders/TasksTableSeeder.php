<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->insert([
        	[
	        	'title' => 'Новая задача 1',
	        	'describe' => 'Описание новой задачи 1',
	        	'date_end' => '2020-10-10',
	        	'priority_id' => 1,
	        	'status_id' => 4,
	        	'user_creator_id' => 1,
                'user_worker_id' => 2,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
        	],
        	[
                'title' => 'Новая задача 2',
                'describe' => 'Описание новой задачи 2',
                'date_end' => '2020-10-19',
                'priority_id' => 2,
                'status_id' => 3,
                'user_creator_id' => 1,
                'user_worker_id' => 2,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 3',
                'describe' => 'Описание новой задачи 3',
                'date_end' => '2020-10-25',
                'priority_id' => 1,
                'status_id' => 2,
                'user_creator_id' => 1,
                'user_worker_id' => 2,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 4',
                'describe' => 'Описание новой задачи 4',
                'date_end' => '2020-10-28',
                'priority_id' => 3,
                'status_id' => 2,
                'user_creator_id' => 1,
                'user_worker_id' => 3,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 5',
                'describe' => 'Описание новой задачи 5',
                'date_end' => '2020-11-10',
                'priority_id' => 2,
                'status_id' => 2,
                'user_creator_id' => 1,
                'user_worker_id' => 3,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 6',
                'describe' => 'Описание новой задачи 6',
                'date_end' => '2020-10-10',
                'priority_id' => 3,
                'status_id' => 1,
                'user_creator_id' => 1,
                'user_worker_id' => 4,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 7',
                'describe' => 'Описание новой задачи 7',
                'date_end' => '2020-10-19',
                'priority_id' => 1,
                'status_id' => 1,
                'user_creator_id' => 1,
                'user_worker_id' => 4,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
            [
                'title' => 'Новая задача 8',
                'describe' => 'Описание новой задачи 8',
                'date_end' => '2020-10-25',
                'priority_id' => 2,
                'status_id' => 3,
                'user_creator_id' => 1,
                'user_worker_id' => 4,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
            ],
        ]);
    }
}
