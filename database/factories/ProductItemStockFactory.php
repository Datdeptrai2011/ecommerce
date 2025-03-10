<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductItem;
use App\Models\Media;
use App\Models\Product;
use App\Models\Stock;
use App\Models\ProductItemStock;

class ProductItemStockFactory extends Factory
{

    protected $model = ProductItemStock::class;
    public function definition(): array
    {
        return [
            'quantity' => fake()->numberBetween(1, 100),

            'stock_id' => Stock::factory()->create()->id,
'product_id' => Product::factory()->create()->id,
'product_item_id' => ProductItem::factory()->create()->id,


        ];
    }
}
