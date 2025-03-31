<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\ProductItemStock;

class Product_item_stocksSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('product_item_stocks')->insert([
            ['stock_id'=>1,'product_id'=>1,'product_item_id'=>1,'quantity'=>'10','created_at' => now(), 'updated_at' => now()],
            ['stock_id'=>2,'product_id'=>2,'product_item_id'=>2,'quantity' =>'5', now(), 'updated_at' => now()],
            ['stock_id'=>3,'product_id'=>3,'product_item_id'=>3,'quantity' =>'4' ,now(), 'updated_at' => now()],
            ['stock_id'=>4,'product_id'=>4,'product_item_id'=>4,'quantity' =>'7' ,now(), 'updated_at' => now()],
            ['stock_id'=>5,'product_id'=>5,'product_item_id'=>5,'quantity' => '2',now(), 'updated_at' => now()],
        ]);
        ProductItemStock::factory()->count(10)->create();
    }
}
