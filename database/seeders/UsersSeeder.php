<?php
namespace Database\Seeders;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
class UsersSeeder extends Seeder
{
    public function run()
    {
        DB::table('users')->insert([
            ['name'=>'user1','email' =>'cd@mail.com','password'=>'123456','address'=>'Da Nang','phone'=>'0987654321','avata'=>'file','citizen_identification'=>'034093784'],
            ['name'=>'user2','email' =>'ad@mail.com','password'=>'654321','address'=>'Da Nang','phone'=>'0987654321','avata'=>'file','citizen_identification'=>'034093784'],
            ['name'=>'user3','email' =>'bd@mail.com','password'=>'456789','address'=>'Da Nang','phone'=>'0987654321','avata'=>'file','citizen_identification'=>'034093784'],
            ['name'=>'user4','email' =>'dd@mail.com','password'=>'987654','address'=>'Da Nang','phone'=>'0987654321','avata'=>'file','citizen_identification'=>'034093784'],
            ['name'=>'user5','email' =>'ed@mail.com','password'=>'000000','address'=>'Da Nang','phone'=>'0987654321','avata'=>'file','citizen_identification'=>'034093784'],
        ]);
        User::factory()->count(10)->create();

    }

}
