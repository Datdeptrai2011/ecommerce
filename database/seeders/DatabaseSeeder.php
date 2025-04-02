<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Đảm bảo các bảng phụ thuộc được chèn đúng thứ tự
        $this->call([
            \Database\Seeders\CategoriesSeeder::class,  // Categories trước
            \Database\Seeders\UsersSeeder::class,      // Nếu có Users
            \Database\Seeders\AdminsSeeder::class,     // Nếu có Admins
            \Database\Seeders\ProductsSeeder::class,   // Products sau Categories
            \Database\Seeders\MediasSeeder::class,     // Medias trước ProductItems
            \Database\Seeders\Product_itemsSeeder::class,  // ProductItems sau Products và Medias
            \Database\Seeders\Address_stocksSeeder::class, // Các bảng phụ trợ khác
            \Database\Seeders\StocksSeeder::class,
            \Database\Seeders\Product_item_stocksSeeder::class,
        ]);
    }
}
