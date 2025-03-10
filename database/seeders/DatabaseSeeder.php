<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Factories\AdminsFactory;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $this->call([
            \Database\Seeders\UsersSeeder::class,
            \Database\Seeders\AdminsSeeder::class,
            \Database\Seeders\CategoriesSeeder::class,
            \Database\Seeders\ProductsSeeder::class,
            \Database\Seeders\MediasSeeder::class,
            \Database\Seeders\Product_itemsSeeder::class,
            \Database\Seeders\Address_stocksSeeder::class,
            \Database\Seeders\StocksSeeder::class,
            \Database\Seeders\Product_item_stocksSeeder::class,
        ]);


        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
