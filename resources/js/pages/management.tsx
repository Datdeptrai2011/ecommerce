import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function Management() {
    const filterCategory = (category: string) => {
        console.log(`Lọc danh mục: ${category}`);
        // Viết logic để lọc sản phẩm theo danh mục
    };
    const moveSlide = (step: number) => {
        console.log(`Di chuyển slide: ${step}`);
        // Thêm logic xử lý di chuyển slider ở đây
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

                            {/* Nút đăng nhập, đăng ký */}
                            <div className="absolute top-4 right-4 flex space-x-2">
                                <Link href="/login3" className="bg-blue-600 px-4 py-2 rounded text-white">ĐĂNG NHẬP</Link>
                                <Link href="/welcome2" className="bg-red-600 px-4 py-2 rounded text-white">ĐĂNG KÝ</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

            {/* Content Section */}
            < section className="container mx-auto p-8 text-center" >
                <h2 className="text-2xl font-bold text-blue-600">Chào mừng bạn đến với YonexSunrise Viet Nam</h2>
                <p className="text-lg mt-4">Chuyên cung cấp các mặt hàng cầu lông</p>

                <div className="grid grid-cols-3 gap-8 mt-8">
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Vân chuyển toàn quốc </h3>
                        <p>Thanh toán khi nhận hàng </p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Bảo đảm chất lượng </h3>
                        <p>Sản phẩm đảm bảo chất lượng </p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Tiến hành thanh toán </h3>
                        <p>Với nhiều hình thức </p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Đổi sản phẩm mới </h3>
                        <p>Nếu sản phẩm lỗi</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Ưu đãi giảm giá </h3>
                        <p>Sale sản phẩm từ 5%-50%</p>
                    </div>
                    <div className="p-4 border rounded shadow">
                        <h3 className="text-xl font-semibold">Và gồm nhiều ưu đãi kháckhác </h3>
                        <p>Free nhiều sản phẩm trong ngày khai trương </p>
                    </div>
                </div>
            </section >
           
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




