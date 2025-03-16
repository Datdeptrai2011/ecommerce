<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/welcome2', function () {
    return Inertia::render('welcome2');
})->name('home');

Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('home');
Route::get('/management', function () {
    return Inertia::render('management');
})->name('home');

Route::get('index',function(){
    echo'hello';

});

Route::get('users', [UserController::class, 'index']);

Route::get('products', [ProductController::class, 'index']);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
