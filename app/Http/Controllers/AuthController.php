<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    // public function welcome2(Request $request){
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:users,email',
    //         'password' => 'required|min:6|confirmed',
    //         'phone' => 'required',
    //         'address' => 'nullable|string',
    //         'avata' => 'nullable|string',
    //         'citizen_identification' => 'nullable|string'
    //     ]);
    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //         'phone' => $request->phone,
    //         'address' => $request->address ?? 'Not provided',
    //         'avata' => $request->avata ?? '',
    //         'citizen_identification' => $request->citizen_identification ?? '',
    //     ]);

    //     return response()->json(['message' => 'User registered successfully', 'user' => $user], 201);
    // }
    public function welcome2(Request $request){
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|min:6|confirmed',
                'password_cf' => 'required|min:6|confirmed',

                'phone' => 'required',
            ]);

            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'password_cf' => Hash::make($request->password),
                'phone' => $request->phone,
            ]);

            return response()->json(['message' => 'Đăng ký thành công!'], 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }


    // Xử lý đăng nhập
    public function login3(Request $request)
    {
        // Validate dữ liệu nhập vào
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Kiểm tra đăng nhập
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            return response()->json(['message' => 'Login successful', 'user' => $user]);
        } else {
            return response()->json(['error' => 'Invalid credentials'], 401);
        }
    }


}
