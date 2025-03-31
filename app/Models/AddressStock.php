<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class AddressStock extends Model
{
    use HasFactory;

    protected $table = 'address_stocks';

    protected $fillable = [
        'district',
        'province_city',
    
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];


}
