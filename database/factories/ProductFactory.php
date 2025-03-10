<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Product;
use App\Models\Category;
class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition(): array
    {
        return [
            'name' =>fake()->unique()->word(),
            'category_id' =>fake()->randomElement(array_merge([null], Category::pluck('id')->toArray())),
        ];
    }
}
