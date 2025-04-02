<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    public function run(): void
    {


        DB::table('products')->insert([
            ['name' => 'Sản phẩm A', 'price' => 100000, 'img' => 'images/product1.jpg', 'category_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Sản phẩm B', 'price' => 120000, 'img' => 'images/product2.jpg', 'category_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Sản phẩm C', 'price' => 130000, 'img' => 'images/product3.jpg', 'category_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Sản phẩm D', 'price' => 150000, 'img' => 'images/product4.jpg', 'category_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'Sản phẩm E', 'price' => 160000, 'img' => 'images/product5.jpg', 'category_id' => 4, 'created_at' => now(), 'updated_at' => now()],
        ]);

        // Tạo thêm 10 sản phẩm bằng Factory
        Product::factory()->count(10)->create();
    }
}
