import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';

export default function login3() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmit = (data: any) => {
        setIsSubmitted(true);
        window.location.href = "/homepage";
    };



    return (
        <>
            <header id="header" className="header has-sticky sticky-jump">
                <div className="header-wrapper">
                    <div id="masthead" className="header-main nav-dark">
                        <div className="relative w-full h-[120px]">
                            <img src="/blue.jpg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                            <img src="/logoyonex.png" alt="Logo1" className="absolute top-4 left-4 w-20 h-12" />
                            <img src="/victor.jpg" alt="Logo2" className="absolute top-4 left-28 w-20 h-12" />
                            <img src="/lining1.png" alt="Logo3" className="absolute top-4 left-52 w-20 h-12" />
                            <img src="/fly.jpg" alt="Logo4" className="absolute top-4 left-80 w-20 h-12" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Section: Form Đăng Ký */}
            <section className="container mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Đăng Nhập </h2>


                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">

                    <div className="mb-4">
                        <label className="block text-left font-medium">Email</label>
                        <input type="email" {...register("email", { required: "Email là bắt buộc", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email không hợp lệ" } })}
                            className="w-full p-2 border rounded" placeholder="Nhập email" />
                        {errors.email && typeof errors.email.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}

                    </div>

                    <div className="mb-4">
                        <label className="block text-left font-medium">Mật khẩu</label>
                        <input type="password" {...register("password", { required: "Mật khẩu là bắt buộc", minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" } })}
                            className="w-full p-2 border rounded" placeholder="Nhập mật khẩu" />
                        {errors.password && typeof errors.password.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>
                    <h1 className="block text-left font-medium">Quên Mật khẩu</h1>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">ĐĂNG NHẬP </button>
                </form>



            </section>

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
