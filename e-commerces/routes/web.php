<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\HomeController;
use Inertia\Inertia;







Route::get('/welcome', function () {
    return Inertia::render('Welcome');
});

Route::get('/Login1', function () {
    return Inertia::render('Login1');
})->name('home');
Route::get('/welcome2', function () {
    return Inertia::render('welcome2');
})->name('home');
// Route::get('/Home', [HomeController::class, 'index']);
// Route::get('/Product', [PageController::class, 'Product']);
// Route::get('/Category', [PageController::class, 'Category']);
// Route::get('/user', function () {
//     return Inertia::render('users/show', ['message' => 'Hello from Laravel']);
// });


Route::get('/profile', function () {
    return Inertia::render('profile');
})->name('home');
Route::get('/management', function () {
    return Inertia::render('management');
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
