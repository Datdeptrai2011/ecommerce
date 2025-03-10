<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class ProductItemStock extends Model
{
    use HasFactory;

    protected $table = 'product_item_stocks';

    protected $fillable = [
        'stock_id',
        'product_id',
        'product_item_id',
        'quantity'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

}
