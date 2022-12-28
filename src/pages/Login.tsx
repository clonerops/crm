import { useState } from "react";
import crmVideo from "../assets/crm1.mp4";
import saipalogo from "../assets/images/logo.png";
import {
    EyeIcon,
    EyeSlashIcon,
    UserIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import Recaptcha from "../components/Recaptcha";
const Login = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [recaptchaValue, setRecaptchaValue] = useState<string>("");
    const [captchaValue, setCaptchaValue] = useState<null>();
    const [refresh, setRefresh] = useState<boolean>(false);

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <>
            <div className="containe grid min-h-screen min-w-full grid-cols-1 justify-around overflow-hidden pt-10 md:grid-cols-3">
                <div />
                <div className="flex w-full flex-col border pt-20 shadow-md shadow-slate-200">
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
                        <section className="mr-2">
                            <Recaptcha
                                setCaptchaValue={setCaptchaValue}
                                refresh={refresh}
                            />
                        </section>
                        <section className="relative flex">
                            <input
                                type="text"
                                className="m-2 w-full rounded-lg border border-gray-300 p-3 text-center font-IRANSans text-[1.3rem] text-sm shadow-md shadow-slate-200 outline-none transition focus-within:border-gray-400 focus-within:bg-slate-200"
                                placeholder="کد امنیتی"
                            />
                            <LockClosedIcon className="absolute left-8 top-6 h-[18px] w-[18px] font-IRANSansBold text-gray-500" />
                        </section>
                        <section className="relative flex">
                            <button className="m-2 w-full rounded-lg bg-secondary p-4 font-IRANSans text-[1.4rem] text-white shadow-sm shadow-secondary transition hover:bg-indigo-800">
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
                {/* <div></div>
                <div className=" col-span-1">
                    <video autoPlay muted id="myVideo">
                        <source src={crmVideo} type="video/mp4" />
                    </video>
                </div> */}
                <div className="absolute bottom-0 right-0 left-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1240 200"
                    >
                        <path
                            fill="#ff5500"
                            fill-opacity="1"
                            d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,96C840,107,960,149,1080,176C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Login;
