<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use DB;

class UserController extends Controller
{
   public function index(){
        $users = User::query()
            ->select(['name', 'email'])
            ->limit(10)
            ->get()
            ->toArray();
        dd($users);
        return;
   }

   public function store(){
        $result = User::create([
            'name' => 'aaaa',
            'email' => 'nnnnn@gmail.com'
        ]);
   }
}
