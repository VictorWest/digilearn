"use client"
import Button from "@/components/button";
import FullLogo from "@/components/full-logo";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { EMAIL_REGEX, PASSWORD_REGEX, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, THEME_COLOUR, LEARNER_DASHBOARD } from "@/lib/shared/constants";
import { useEffect, useState } from "react";
import { User } from "@/lib/shared/interface";
import { generateUUID } from "@/lib/utils/scripts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query"
import { createUserRequest } from "@/lib/utils/http";
import { ClipLoader } from "react-spinners";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function LoginPage({ register }: { register?: boolean }){
    const router = useRouter()

    const [ userData, setUserData ] = useState<User>(
        { userId: "", 
            fullName: "", 
            login: { email: "", password: "" } }) // for register
    const [ confirmPassword, setConfirmPassword ] = useState("")

    const [ showPassword, setShowPassword ] = useState({ password: false, confirmPassword: false })
    const [ error, setError ] = useState("")

    const { mutate, isPending, isError, error: fnError, isSuccess } = useMutation({
        mutationFn: createUserRequest
    })

    useEffect(() => {
        if (isError){
            setError("There was an error, please try again.")
        }
    }, [isError])

    // useEffect(() => {
    //     if (isSuccess){
    //         router.push(LOGIN_PAGE_ROUTE)
    //     }
    // }, [isSuccess])

    const handleRegister = async () => {
        if (!EMAIL_REGEX.test(userData?.login.email || "")){
            setError("Please give a valid email")
        } else if (!PASSWORD_REGEX.test(userData?.login.password || "")){
            setError("Password must have min 8 chars, 1 number, 1 lowercase, 1 uppercase, 1 special character")
        } else if (userData?.login.password !== confirmPassword){
            setError("Your passwords should be consistent")
        } else if (userData?.fullName == ""){
            setError("Please give a name")
        } else {
            setError("")
            const userId = await generateUUID()
            if (userId){
                userData.userId = userId
                // const response =  mutate({ userData })
                const response = await createUserRequest({ userData })
                if (response.ok){
                    router.push(LOGIN_PAGE_ROUTE)
                }
                setError(response.error?.message)
            }
        }
    }

    const handleLogin = async () => {
        const data = await signIn('credentials', {
            email: userData.login.email,
            password: userData.login.password,
            redirect: false
        })

        if (data?.ok){
            router.push(LEARNER_DASHBOARD)
        } else {
            if (data?.status === 401){
                setError("User not found")
            }
        }
    }

    return (
        <div className={`flex items-center justify-center ${!register ? "h-screen" : ""}`}>
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
                            <input type="email" value={userData?.login.email} onChange={(e) => setUserData((prev: any) => ({ ...prev, login: ({...prev.login, email: e.target.value }) }))} placeholder="Email" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                        </div>
                        <div>
                            <p>Password</p>
                            <div className="relative">
                                <input value={userData?.login.password} onChange={(e) => setUserData((prev: any) => ({ ...prev, login: ({...prev.login, password: e.target.value }) }))} type={showPassword.password ? "text" : "password"} placeholder="Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                                <div onClick={() => setShowPassword(prev => ({...prev, password: !prev.password}))} className="absolute top-0 translate-y-2 right-3 cursor-pointer">{showPassword.password ? <FaEye /> : <FaEyeSlash />}</div>
                            </div>
                        </div>
                        {register && <div>
                            <p>Confirm Password</p>
                            <div className="relative">
                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type={showPassword.confirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full rounded-md outline-0 border border-stone-300 px-3 py-1.5 text-sm" />
                                <div onClick={() => setShowPassword(prev => ({...prev, confirmPassword: !prev.confirmPassword}))} className="absolute top-0 translate-y-2 right-3 cursor-pointer">{showPassword.confirmPassword ? <FaEye /> : <FaEyeSlash />}</div>
                            </div>
                        </div>}
                        <p className="text-xs text-[#DB2726]">{error}</p>
                        <div className="flex items-start gap-1 text-xs">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>
                        <div onClick={register ? handleRegister : handleLogin}>
                            <Button 
                                text= {
                                    isPending ?
                                        <ClipLoader
                                        color={"#fff"}
                                        loading={isPending}
                                        size={20}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                    :
                                    `${register ? "Register" : "Sign in"}`
                                } 
                                colour="white" 
                            />
                        </div>
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