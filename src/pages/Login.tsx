import { useState } from "react";
import crmVideo from "../assets/crm1.mp4";
import saipalogo from "../assets/images/logo.png";
import { EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/24/outline";
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <>
            <div className="min-h-screen overflow-hidden">
                <div className="container grid min-w-full grid-cols-1 md:grid-cols-3">
                    <div className="flex w-full flex-col justify-center">
                        <img
                            width={64}
                            height={64}
                            src={saipalogo}
                            className="self-center pb-4"
                            alt="crm-saipa"
                        />
                        <h1 className="pb-8 text-center font-IRANSansBold text-[2rem]">
                            سامانه مدیریت امور مشتریان{" "}
                            <span className="text-primary">سایپا</span>
                        </h1>
                        <form className="container flex flex-col">
                            <section className="relative flex">
                                <input
                                    type="text"
                                    className="m-2 w-full rounded-lg border border-gray-300 p-3 font-IRANSans text-[1.3rem] text-sm shadow-md shadow-slate-200 outline-none transition focus-within:border-gray-400 focus-within:bg-slate-200"
                                    placeholder="نام کاربری"
                                />
                                <UserIcon className="absolute left-8 top-6 h-[18px] w-[18px] font-IRANSansBold text-gray-500" />
                            </section>
                            <section className="relative flex">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="m-2 w-full rounded-lg border border-gray-300 p-3 font-IRANSans text-[1.3rem] text-sm shadow-md shadow-slate-200 outline-none transition focus-within:border-gray-400 focus-within:bg-slate-200"
                                    placeholder="رمز عبور"
                                />
                                {showPassword ? (
                                    <EyeSlashIcon
                                        onClick={handleShowPassword}
                                        className="absolute left-8 top-6 h-[18px] w-[18px] font-IRANSansBold text-gray-500"
                                    />
                                ) : (
                                    <EyeIcon
                                        onClick={handleShowPassword}
                                        className="absolute left-8 top-6 h-[18px] w-[18px] font-IRANSansBold text-gray-500"
                                    />
                                )}
                            </section>
                            <section className="relative flex">
                                <button className="m-1 w-full rounded-lg bg-primary p-4 font-IRANSans text-[1.4rem] text-white shadow-sm shadow-primary transition hover:bg-orange-500">
                                    ورود
                                </button>
                            </section>
                        </form>
                        <section className="relative flex">
                            <a
                                href="/"
                                className="m-1 p-4 font-IRANSans text-xl text-blue-400"
                            >
                                رمز عبور خود را فراموش کرده ام!
                            </a>
                        </section>
                    </div>
                    <div className="bg-login relative col-span-2 m-auto hidden md:block ">
                        <video autoPlay muted id="myVideo">
                            <source src={crmVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      
                    <path
                        fill="#ff5500"
                        fill-opacity="1"
                        d="M0,224L80,192C160,160,320,96,480,74.7C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                    ></path>
                </svg>{" "}
            </div>
        </>
    );
};

export default Login;
