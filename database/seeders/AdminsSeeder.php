<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Admin;

class AdminsSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('admins')->truncate(); 

        DB::table('admins')->insert([
            ['email' => 'mary@mail.com', 'name' => 'mary', 'password' => bcrypt('123456')],
            ['email' => 'peter@mail.com', 'name' => 'peter', 'password' => bcrypt('333333')],
            ['email' => 'mesi@mail.com', 'name' => 'messi', 'password' => bcrypt('555555')],
            ['email' => 'jonh@mail.com', 'name' => 'jonh', 'password' => bcrypt('666666')],
            ['email' => 'mith@mail.com', 'name' => 'mith', 'password' => bcrypt('177777')],
        ]);

        Admin::factory()->count(10)->create();
    }
}
