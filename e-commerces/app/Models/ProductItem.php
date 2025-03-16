<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ProductItem extends Model
{
    use HasFactory;

    protected $table = 'product_items';

    protected $fillable = [
        'variant',
        'media_id',
        'product_id'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

}
