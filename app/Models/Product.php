<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Product extends Model
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
<<<<<<< HEAD
        'category_id',
        'price',
        'img'
=======
        'category_id'
>>>>>>> c70c8bdd5bd91e0ae0ed0c0d2211000c78b634f6
    ];

    protected function casts(): array
    {
        return [
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

}
