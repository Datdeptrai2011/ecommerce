<?php
namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\ProductItem;

class Product_itemsSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('product_items')->insert([
            ['variant'=>'mau do','media_id'=>1,'product_id'=>1,'created_at' => now(), 'updated_at' => now()],
            ['variant'=>'mau xanh','media_id'=>2,'product_id'=>2,'created_at' => now(), 'updated_at' => now()],
            ['variant'=>'mau den','media_id'=>3,'product_id'=>3,'created_at' => now(), 'updated_at' => now()],
            ['variant'=>'mau trang','media_id'=>4,'product_id'=>4,'created_at' => now(), 'updated_at' => now()],
            ['variant'=>'mau vang','media_id'=>5,'product_id'=>5,'created_at' => now(), 'updated_at' => now()],
        ]);
        ProductItem::factory()->count(10)->create();
    }
}
