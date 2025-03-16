<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\Media;
class MediasSeeder extends Seeder
{

    public function run(): void
    {
        DB::table('medias')->insert([
            ['name'=>'media1','path' =>'"/var/www/html/media/image1.jpg"',],
            ['name'=>'media2','path' =>'"/var/www/html/media/image2.jpg"'],
            ['name'=>'media3','path' =>'"/var/www/html/media/image3.jpg"'],
            ['name'=>'media4','path' =>'"/var/www/html/media/image4.jpg"'],
            ['name'=>'media5','path' =>'"/var/www/html/media/image5.jpg"'],
        ]);
        Media::factory()->count(10)->create();
    }
}
