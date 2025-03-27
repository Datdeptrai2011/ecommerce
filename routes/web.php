<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});



Route::get('/welcome2', function () {
    return Inertia::render('welcome2');
})->name('home');
Route::get('/Login1', function () {
    return Inertia::render('Login1');
})->name('login1');

Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('home');
Route::get('/management', function () {
    return Inertia::render('management');
})->name('home');
Route::get('/login3', function () {
    return Inertia::render('login3');
})->name('home');
Route::get('/homepage', function () {
    return Inertia::render('homepage');
})->name('home');

Route::get('index',function(){
    echo'hello';

});





Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
