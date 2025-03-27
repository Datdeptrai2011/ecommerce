<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
        return [
            'name' => fake()->unique()->word(),
            'parent_id' => fake()->randomElement([null, 1, 2, 3, 4, 5]),
        ];
    }
}
