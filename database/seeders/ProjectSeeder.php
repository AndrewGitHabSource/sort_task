<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class ProjectSeeder extends Seeder
{
    public function run()
    {
        DB::table('projects')->insert([
            'title' => 'project 1',
        ]);
        DB::table('projects')->insert([
            'title' => 'project 2',
        ]);
    }
}
