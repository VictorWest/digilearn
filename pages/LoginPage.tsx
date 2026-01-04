"use client"
import Button from "@/components/button";
import FullLogo from "@/components/full-logo";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { EMAIL_REGEX, PASSWORD_REGEX, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, THEME_COLOUR, BACKEND_REGISTER } from "@/shared/constants";
import { useState } from "react";
import { LoginUser, User } from "@/shared/interface";

export default function LoginPage({ register }: { register?: boolean }){
    const [ userData, setUserData ] = useState<User>() // for register
    const [ loginData, setLoginData ] = useState<LoginUser>() // for login

    const [ error, setError ] = useState("")

    const handleRegister = async () => {
        if (!EMAIL_REGEX.test(userData?.login.email || "")){
            setError("Please give a valid email")
        } else if (!PASSWORD_REGEX.test(userData?.login.password || "")){
            setError("Password must have min 8 chars, 1 number, 1 lowercase, 1 uppercase, 1 special character")
        } else if (userData?.login.password !== userData?.confirmPassword){
            setError("Your passwords should be consistent")
        } else if (userData?.fullName == ""){
            setError("Please give a name")
        } else {
            setError("")

            try{
                const response = await fetch(BACKEND_REGISTER, ({
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userData)
                }))
    
                if (response.ok){
                    // ...
                }
            } catch (error){
                console.log(error)
            }
        }
    }

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
                            <input value={userData?.fullName} onChange={(e) => setUserData((prev: any) => ({ ...prev, fullName: e.target.value }))} placeholder="Name" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>}
                        <div>
                            <p>Email</p>
                            <input value={userData?.login.email} onChange={(e) => setUserData((prev: any) => ({ ...prev, login: ({...prev.login, email: e.target.value }) }))} placeholder="Email" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>
                        <div>
                            <p>Password</p>
                            <input value={userData?.login.password} onChange={(e) => setUserData((prev: any) => ({ ...prev, login: ({...prev.login, password: e.target.value }) }))} type="password" placeholder="Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>
                        {register && <div>
                            <p>Confirm Password</p>
                            <input type="password" placeholder="Confirm Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>}
                        <p className="text-xs text-[#DB2726]">{error}</p>
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
                            {register ? "Already have an account" : "Don't have an account"}?<Link href={register ? LOGIN_PAGE_ROUTE : REGISTER_PAGE_ROUTE} style={{ color: THEME_COLOUR }}>{register ? "Login" : "Register"}</Link>
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