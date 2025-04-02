import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
interface ProductForm {
    name: string;
    price: number;
    img: FileList;
}
export default function Management() {
    // const filterCategory = (category: string) => {
    //     console.log(`Lọc danh mục: ${category}`);

    // };

    const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>();
    const [products, setProducts] = useState([
        { id: 1, name: 'Sản phẩm 1', price: 100, img: '/product1.jpg' },
        { id: 2, name: 'Sản phẩm 2', price: 150, img: '/product2.jpg' },
        { id: 3, name: 'Sản phẩm 3', price: 200, img: '/product3.jpg' },
    ]);

    const onSubmit = async (data: ProductForm) => {
        console.log('Submitting:', data);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("price", data.price.toString());
        if (data.img.length > 0) {
            formData.append("img", data.img[0]);
        } else {
            alert("Vui lòng tải lên hình ảnh!");
            return;
        }
            const response = await fetch("/api/product", {
                method: "POST",
                body: formData,
            });

            console.log('Response:', response);
            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                throw new Error("Lỗi khi thêm sản phẩm!");
            }
    };

    return (
        <>
            <header id="header" className="header has-sticky sticky-jump">
                <div className="header-wrapper">
                    <div id="masthead" className="header-main nav-dark">
                        <div className="relative w-full h-[120px]">
                            {/* Background */}
                            <img src="/blue.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />

                            {/* Logo */}
                            <img src="/logoyonex.png" alt="Logo1" className="absolute top-4 left-4 w-20 h-12" />
                            <img src="/victor.jpg" alt="Logo2" className="absolute top-4 left-28 w-20 h-12" />
                            <img src="/lining1.png" alt="Logo3" className="absolute top-4 left-52 w-20 h-12" />
                            <img src="/fly.jpg" alt="Logo4" className="absolute top-4 left-80 w-20 h-12" />


                        </div>
                    </div>
                </div>
            </header >

            {/* Content Section */}
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Danh Sách Sản Phẩm</h2>

                {/* Form Nhập Thông Tin Sản Phẩm */}
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                    <div className="mb-2">
                        <label htmlFor="name" className="block">Tên sản phẩm:</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Tên sản phẩm là bắt buộc' })}
                            className="border border-gray-300 p-2 w-full"
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="price" className="block">Giá:</label>
                        <input
                            type="number"
                            {...register('price', { required: 'Giá là bắt buộc', valueAsNumber: true })}
                            className="border border-gray-300 p-2 w-full"
                        />
                        {errors.price && <span className="text-red-500">{errors.price.message}</span>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="img" className="block">Tải lên hình ảnh:</label>
                        <input
                            type="file"
                            accept="image/*" // Chỉ cho phép tải lên các tệp hình ảnh
                            {...register('img', { required: 'Hình ảnh là bắt buộc' })}
                            className="border border-gray-300 p-2 w-full"
                        />
                        {errors.img && <span className="text-red-500">{errors.img.message}</span>}
                    </div>
                    <button type="submit" className="bg-blue-500 text-white p-2">Thêm sản phẩm</button>
                </form>

                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2">Tên</th>
                            <th className="border border-gray-300 p-2">Giá</th>
                            <th className="border border-gray-300 p-2">Hình Ảnh</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.id}>
                                <td className="border border-gray-300 p-2">{product.id}</td>
                                <td className="border border-gray-300 p-2">{product.name}</td>
                                <td className="border border-gray-300 p-2">{product.price} VNĐ</td>
                                <td className="border border-gray-300 p-2">
                                    <img src={product.img} alt={product.name} className="w-16 h-16 object-cover" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <footer className="w-full bg-gray-800 text-white text-center p-4 mt-8">
                <div className='mid-footer'>
                    <div className='Container'>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <span className='tiltel-menu'>Thông tin chung </span>
                            <div className='des_foo'>
                                <p>
                                    <b>YonexSunrise</b>
                                    "là hệ thống cửa hàng cầu lông với hơn 50 chi nhánh trên toàn quốc, cung cấp sỉ và lẻ các mặt hàng dụng cụ cầu lông từ phong trào tới chuyên nghiệp"
                                </p>
                                <p>
                                    <b>Với sứ mệnh </b>
                                    <em>
                                        YonexSunrise cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để nâng cao sức khỏe của chính mình.
                                    </em>
                                </p>
                                <p>
                                    <b>Tầm nhìn :</b>
                                    <em> "Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"</em>
                                </p>
                            </div>
                        </div>
                        <div className='col-xs-12 col-md-6 col-lg-3'>
                            <span className='tiltel-menu'>Thông tin liên hệ </span>
                            <div className='list-menu toggle-mn'></div>
                            <div className='des_foo'>
                                <p>
                                    <b>YonexSunrise</b>
                                    "là hệ thống cửa hàng cầu lông với hơn 50 chi nhánh trên toàn quốc, cung cấp sỉ và lẻ các mặt hàng dụng cụ cầu lông từ phong trào tới chuyên nghiệp"
                                </p>
                                <p>
                                    <b>Với sứ mệnh </b>
                                    <em>
                                        YonexSunrise cam kết mang đến những sản phẩm, dịch vụ chất lượng tốt nhất phục vụ cho người chơi thể thao để nâng cao sức khỏe của chính mình.
                                    </em>
                                </p>
                                <p>
                                    <b>Tầm nhìn :</b>
                                    <em> "Trở thành nhà phân phối và sản xuất thể thao lớn nhất Việt Nam"</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                &copy; 2025 Hệ Thống Cửa Hàng . All rights reserved.
            </footer>
        </>
    );
}




