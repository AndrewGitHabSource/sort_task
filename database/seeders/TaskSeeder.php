<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class TaskSeeder extends Seeder
{
    public function run()
    {
        DB::table('tasks')->insert([
            'name' => 'task 1',
            'priority' => 1,
            'project_id' => 1,
        ]);
        DB::table('tasks')->insert([
            'name' => 'task 2',
            'priority' => 2,
            'project_id' => 1,
        ]);
        DB::table('tasks')->insert([
            'name' => 'task 3',
            'priority' => 3,
            'project_id' => 1,
        ]);
        DB::table('tasks')->insert([
            'name' => 'task 4',
            'priority' => 4,
            'project_id' => 2,
        ]);
    }
}
