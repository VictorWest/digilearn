"use client"
import Button from "@/components/button";
import FullLogo from "@/components/full-logo";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { LOGIN_PAGE, REGISTER_PAGE, THEME_COLOUR } from "@/shared/constants";

export default function LoginPage({ register }: { register?: boolean }){
    return (
        <div className={`flex items-center justify-center ${!register && "h-screen"}`}>
            <div className={`w-200 ${register ? "h-170" : "h-130"} overflow-y-visible border border-stone-200 shadow flex p-10`}>
                <div className="w-1/2 space-y-5 *:space-y-3">
                    <div className="flex flex-col items-center">
                        <FullLogo />
                        <h2 className="text-xl font-bold">Sign {register ? "up" : "in"} to your account</h2>
                        <p className="text-xs text-gray-600">{register ? "Welcome to DigiLearn! We are excited to have you here." : "Welcome back! Please enter your details to access your account."}</p>
                    </div>
                    <div className="px-5 text-sm *:space-y-2">
                        {register && <div>
                            <p>Full Name</p>
                            <input placeholder="Name" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>}
                        <div>
                            <p>Email</p>
                            <input placeholder="Email" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>
                        <div>
                            <p>Password</p>
                            <input type="password" placeholder="Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>
                        {register && <div>
                            <p>Confirm Password</p>
                            <input type="password" placeholder="Confirm Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>}
                        <div className="flex items-start gap-1 text-xs">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <Button text={`${register ? "Register" : "Sign in"}`} colour="white" />
                    </div>
                    <div className="uppercase text-center text-xs text-gray-600">Or continue with</div>
                    <div>
                        <div className="w-full flex justify-center items-start gap-3 px-5 text-xs *:flex *:justify-center *:items-center *:gap-1 *:border *:border-gray-300 *:rounded-md *:p-2">
                            <div>
                                <FcGoogle className="text-lg" />
                                Sign in with Google
                            </div>
                            <div>
                                <FaGithub className="text-lg" />
                                Sign in with Github
                            </div>
                        </div>
                        <div className="text-xs flex items-center justify-center gap-2">
                            {register ? "Already have an account" : "Don't have an account"}?<Link href={register ? LOGIN_PAGE : REGISTER_PAGE} style={{ color: THEME_COLOUR }}>{register ? "Login" : "Register"}</Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <Image src="/main/login-toon.png" width={300} height={300} alt="Login PNG" />
                </div>
            </div>
        </div>
    )
}