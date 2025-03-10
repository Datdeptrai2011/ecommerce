<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\AddressStock;

class AddressStockFactory extends Factory
{

    public function definition(): array
    {
        return [
            'district' =>fake()->randomElement(['lien chieu','hoa khanh','dai loc']),
            'province_city' => fake()->randomElement(['da nang','quang nam']),
        ];
    }
}
