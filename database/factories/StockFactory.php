<?php

namespace Database\Factories;


use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\AddressStock;


class StockFactory extends Factory
{

    public function definition(): array
    {
        return [
            'name' =>fake()->name(),
            'address_stock_id' => AddressStock::factory(),
        ];
    }
}
