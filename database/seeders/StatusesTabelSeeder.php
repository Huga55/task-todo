<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class StatusesTabelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->insert([
        	['name' => 'К выполнению'],
        	['name' => 'Выполняется'],
        	['name' => 'Выполнена'],
        	['name' => 'Отменена'],
        ]);
    }
}
