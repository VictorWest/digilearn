"use client"
import { COURSE_CATALOG_ROUTE, HOME_ROUTE, LEARNER_DASHBOARD, THEME_COLOUR } from "@/shared/constants";
import Button from "./button";
import FullLogo from "./full-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname()

    return (
        <div className="bg-white flex justify-between px-10 py-4 text-black border-b border-stone-200">
            <FullLogo />
            <div className={`flex items-center gap-3 text-sm *:hover:text-[${THEME_COLOUR}] cursor-pointer`}>
                <Link href={HOME_ROUTE} style={{ color: (pathname?.includes("/home")) ? THEME_COLOUR : "black"}} >Home</Link>
                <Link href={COURSE_CATALOG_ROUTE} style={{ color: (pathname?.includes("/courses")) ? THEME_COLOUR : "black"}}>Courses</Link>
                <Link href={LEARNER_DASHBOARD} style={{ color: (pathname?.includes(LEARNER_DASHBOARD)) ? THEME_COLOUR : "black"}}>Library</Link>
            </div>
            <div className="flex items-center gap-3">
                <Button background="#fff" text="Log In" />
                <Button text="Sign Up" colour="white" />
            </div>
        </div>
    )
}