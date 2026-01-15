"use client"
import { THEME_COLOUR } from "@/lib/shared/constants";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function FullLogo(){
    return <div onClick={() => redirect("/home")} style={{ color: THEME_COLOUR}} className="flex items-center gap-1 text-lg font-bold cursor-pointer">
        <Image src="/main/digilearn-logo.png" width={30} height={30} alt="DigiLearn Logo" />
        DigiLearn
    </div>
}