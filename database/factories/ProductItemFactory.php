<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\ProductItem;
use App\Models\Media;
use App\Models\Product;


class ProductItemFactory extends Factory
{
    protected $model = ProductItem::class;
    public function definition(): array
    {
        return [
            'variant' => $faker->word,
        'media_id' => $faker->numberBetween(1, 10),
        'product_id' => Product::inRandomOrder()->first()->id,
        ];
    }
}
