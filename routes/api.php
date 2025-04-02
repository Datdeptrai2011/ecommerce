<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
Route::get('/welcome2', function () {
    return response()->json(['message' => 'API welcome2 hoạt động!']);
});
Route::post('/login1', [AuthController::class, 'login1']);
Route::post('/product', [ProductController::class,  'index']);
