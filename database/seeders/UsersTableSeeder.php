<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
        	[
	        	'login' => 'admin',
	        	'name' => 'Иван',
	        	'surname' => 'Иванов',
	        	'patronymic' => 'Иванович',
	        	'password' => md5('admin'),
	        	'status' => 1,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
        	],
        	[
        		'login' => 'user',
	        	'name' => 'Петр',
	        	'surname' => 'Сидоров',
	        	'patronymic' => 'Николаевич',
	        	'password' => md5('user'),
	        	'status' => 0,
                'created_at' => date("Y-m-d H:i:s"),
                'updated_at' => date("Y-m-d H:i:s"),
        	]
        ]);
    }
}
