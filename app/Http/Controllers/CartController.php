<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use DB;

class CartController extends Controller
{
    public function Index()
    {
       $product = DB::table('products')->get();
       dd($product);
    }

}
