<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Category;
class CategoriesSeeder extends Seeder
{

    public function run(): void
    {

        $parentId = DB::table('categories')->insertGetId([
            'name' => 'categories1',
            'parent_id' => null,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('categories')->insert([
            ['name' => 'categories2', 'parent_id' => $parentId, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'categories3', 'parent_id' => $parentId, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'categories4', 'parent_id' => $parentId, 'created_at' => now(), 'updated_at' => now()],
            ['name' => 'categories5', 'parent_id' => $parentId, 'created_at' => now(), 'updated_at' => now()],
        ]);

        Category::factory()->count(10)->create();
    }
}
