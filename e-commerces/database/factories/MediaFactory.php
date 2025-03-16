<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Media;

class MediaFactory extends Factory
{
    protected $model = Media::class;
    public function definition(): array
    {
        return [
            'name' =>fake()->unique()->word(),
            'path' =>fake()->filePath(),
        ];
    }
}
