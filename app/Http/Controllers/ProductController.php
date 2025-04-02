<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Lấy tất cả sản phẩm
        $products = Product::all();

        // Trả về component Inertia với dữ liệu sản phẩm
        return Inertia::render('Product', [
            'products' => $products,
        ]);
        return response()->json(Product::all());
    }

    public function store(Request $request)
    {
        // Xử lý thêm sản phẩm mới
        $validatedData = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'img' => 'required|image|max:2048',
        ]);

        if ($request->hasFile('img')) {
            $imagePath = $request->file('img')->store('products', 'public');
        } else {
            return response()->json(['error' => 'Không thể tải ảnh lên'], 400);
        }

        $product = Product::create([
            'name' => $validatedData['name'],
            'price' => $validatedData['price'],
            'img' => $imagePath,
        ]);

        return response()->json($product);
    }
}
