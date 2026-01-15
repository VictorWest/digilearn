"use client"
import Link from "next/link";
import Button from "./button";
import { COURSE_CATALOG_ROUTE } from "@/lib/shared/constants";

export default function Hero(){
    return(
        <div style={{ backgroundImage: "url('/home/hero-image-1.jpg')", minHeight: "calc(100vh - 64px)" }} className="bg-cover bg-no-repeat bg-center flex justify-center items-center">
            <div className="text-center bg-black/10 space-y-3 py-10">
                <h1 className="text-5xl font-bold">Unlock Your Potential with DigiLearn</h1>
                <div>
                    <h4 className="px-10 font-semibold mx-auto w-4/5">Access a world of knowledge with expert-led courses. Transform your career and life with our flexible online learning platform.</h4>
                </div>
                <div className="w-full flex justify-center gap-5 mt-5">
                    <Link href={COURSE_CATALOG_ROUTE}><Button colour="white" text="Explore Courses" /></Link>
                    <Button background="white" text="Sign Up for Free" />
                </div>
            </div>
        </div>
    )
}