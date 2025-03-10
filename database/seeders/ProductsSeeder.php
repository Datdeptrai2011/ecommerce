<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductsSeeder extends Seeder
{
    public function run(): void
    {
        // Lấy ID của danh mục đầu tiên nếu có, nếu không gán mặc định là 1
        $category = DB::table('categories')->first();
        $defaultCategoryId = $category->id ?? 1;

        DB::table('products')->insert([
            ['name' => 'Sản phẩm A', 'category_id' => $defaultCategoryId, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'product1', 'category_id' => 1, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'product2', 'category_id' => 2, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'product3', 'category_id' => 3, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'product4', 'category_id' => 4, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'product5', 'category_id' => 5, 'created_at' => now(), 'updated_at' => now()],
        ]);

        // Tạo thêm 10 sản phẩm bằng Factory
        Product::factory()->count(10)->create();
    }
}
