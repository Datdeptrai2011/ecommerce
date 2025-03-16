import * as ReactHookForm from 'react-hook-form';
const { useForm } = ReactHookForm;
const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
};
import { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import { type SharedData } from '@/types';
export default function Welcome2() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const { auth } = usePage<SharedData>().props;
    return (
        <>
            <Head title="Login" />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-center mb-2 text-black">Sign In</h4>
                    <p className="text-center text-gray-500 mb-4">Enter your email and password to sign in</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full px-4 py-2 border rounded-lg text-black"
                                placeholder="Email"
                                defaultValue="admin@argon.com"
                            />
                            {errors.email?.message && <p className="text-red-500 text-xs pt-1">{errors.email.message}</p>}

                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full px-4 py-2 border rounded-lg text-black"
                                placeholder="Password"
                                defaultValue="secret"
                            />
                            {errors.password?.message && <p className="text-red-500 text-xs pt-1">{errors.password.message}</p>}
                        </div>
                        <div className="mb-3 flex items-center">
                            <input
                                type="checkbox"
                                {...register("remember")}
                                className="mr-2"
                                id="rememberMe"
                            />
                            <label htmlFor="rememberMe" className="text-gray-600">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </button>
                    </form>
                    <div className="text-center mt-4">
                        <p className="text-sm">Forgot your password?
                            <a href="/reset-password" className="text-blue-500"> Reset here</a>
                        </p>
                        <p className="text-sm mt-2">Don't have an account?
                            <a href="/register" className="text-blue-500"> Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
