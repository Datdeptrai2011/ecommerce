import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
import { useState } from 'react';
import axios, { AxiosError } from "axios";


export default function Management() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const onSubmit = async ({ name, email, password, confirmPassword, phone }: any) => {
        const data = {
            name,
            email,
            password,
            password_confirmation: confirmPassword, // Laravel yêu cầu trường này
            phone
        };

        try {
            await axios.post("http://ecommerces.test/api/welcome2", data);
            alert("Đăng ký thành công!");
            window.location.href = "/login3";
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Chi tiết lỗi:", error.response?.data);
                alert(`Lỗi: ${JSON.stringify(error.response?.data)}`);
            } else {
                console.error("Lỗi không xác định:", error);
                alert("Đã xảy ra lỗi, vui lòng thử lại!");
            }
        }

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
                <h2 className="text-2xl font-bold mb-4">Đăng Ký</h2>

            {isSubmitted ? (
                <p className="text-green-500 text-lg font-semibold"> Đã đăng ký thành công!</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
                    <div className="mb-4">
                        <label className="block text-left font-medium">Họ và tên</label>
                        <input {...register("fullname", { required: "Họ và tên là bắt buộc" })}
                            className="w-full p-2 border rounded" placeholder="Nhập họ và tên" />
                        {errors.fullname && typeof errors.fullname.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-left font-medium">Email</label>
                        <input type="email" {...register("email", { required: "Email là bắt buộc", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email không hợp lệ" } })}
                            className="w-full p-2 border rounded" placeholder="Nhập email" />
                        {errors.email && typeof errors.email.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}

                    </div>
                    <div className="mb-4">
                        <label className="block text-left font-medium">Phone</label>
                        <input type="text" {...register("phone", { required: "Số điện thoại bắt buộc ", pattern: { value:/^(0[0-9]{9}|(\+84)[0-9]{9})$/,  message: "Số điện thoại không hợp lệ " } })}
                            className="w-full p-2 border rounded" placeholder="Nhập Số điện thoại " />
                        {errors.phone && typeof errors.phone.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}

                    </div>
                    <div className="mb-4">
                        <label className="block text-left font-medium">Mật khẩu</label>
                        <input type="password" {...register("password", { required: "Mật khẩu là bắt buộc", minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" } })}
                            className="w-full p-2 border rounded" placeholder="Nhập mật khẩu" />
                        {errors.password && typeof errors.password.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>  <div className="mb-4">
                        <label className="block text-left font-medium">Nhập lại Mật khẩu</label>
                        <input type="password" {...register("password_cf", { required: "Nhập lại Mật khẩu là bắt buộc", minLength: { value: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" } })}
                            className="w-full p-2 border rounded" placeholder="Nhập lại mật khẩu" />
                        {errors.password && typeof errors.password.message === "string" && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">ĐĂNG KÝ</button>

                </form>
                )}


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
                <p>{`© 2025 Hệ Thống Cửa Hàng. All rights reserved.`}</p>
            </footer>
        </>
    );
}

