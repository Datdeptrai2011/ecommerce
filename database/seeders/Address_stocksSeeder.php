<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\AddressStock;

class Address_stocksSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('address_stocks')->insert([
            ['district'=>'Dai Loc','province_city'=>'Quang Nam','created_at' => now(), 'updated_at' => now()],
            ['district'=>'Ngu Hanh Son','province_city'=>'Da Nang','created_at' => now(), 'updated_at' => now()],
            ['district'=>'Lien Chieu','province_city'=>'Da Nang','created_at' => now(), 'updated_at' => now()],
            ['district'=>'Hiep Duc','province_city'=>'Quang Nam','created_at' => now(), 'updated_at' => now()],
            ['district'=>'Phu Ninh','province_city'=>'Quang Nam','created_at' => now(), 'updated_at' => now()],
        ]);
        AddressStock::factory()->count(10)->create();
    }
}
