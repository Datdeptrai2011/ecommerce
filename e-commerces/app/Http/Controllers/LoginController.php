<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function show(User $user)
    {
        return Inertia::render('Login1');
    }
}
