<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Stock;
use App\Models\Product;


class StocksSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('stocks')->insert([
            ['name'=>'stock1','address_stock_id'=>'5','created_at' => now(), 'updated_at' => now()],
            ['name'=>'stock2','address_stock_id'=>'3','created_at' => now(), 'updated_at' => now()],
            ['name'=>'stock3','address_stock_id'=>'1','created_at' => now(), 'updated_at' => now()],
            ['name'=>'stock4','address_stock_id'=>'4','created_at' => now(), 'updated_at' => now()],
            ['name'=>'stock5','address_stock_id'=>'2','created_at' => now(), 'updated_at' => now()],
        ]);
        Product::factory()->count(5)->create();

    }
}
