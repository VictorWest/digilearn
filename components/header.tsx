"use client"
import { COURSE_CATALOG_ROUTE, HOME_ROUTE, LEARNER_DASHBOARD, LOGIN_PAGE_ROUTE, REGISTER_PAGE_ROUTE, THEME_COLOUR } from "@/lib/shared/constants";
import Button from "./button";
import FullLogo from "./full-logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { signOut } from "next-auth/react"

export default function Header({ session } : { session: Session | null }){
    const pathname = usePathname()

    return (
        <div className="bg-white flex justify-between px-10 py-4 text-black border-b border-stone-200">
            <FullLogo />
            <div className={`flex items-center gap-3 text-sm *:hover:text-[${THEME_COLOUR}] cursor-pointer`}>
                <Link href={HOME_ROUTE} style={{ color: (pathname?.includes("/home")) ? THEME_COLOUR : "black"}} >Home</Link>
                <Link href={COURSE_CATALOG_ROUTE} style={{ color: (pathname?.includes("/courses")) ? THEME_COLOUR : "black"}}>Courses</Link>
                <Link href={LEARNER_DASHBOARD} style={{ color: (pathname?.includes(LEARNER_DASHBOARD)) ? THEME_COLOUR : "black"}}>Library</Link>
            </div>
            {session ? 
                <div className="flex items-center gap-3">
                    <div>{session.user?.name}</div>
                    {session && <div onClick={() => signOut()}><Button text="Logout" colour="#fff" /></div>}
                </div> 
                : 
                <div className="flex items-center gap-3">
                    <Link href={LOGIN_PAGE_ROUTE}><Button background="#fff" text="Log In" /></Link>
                    <Link href={REGISTER_PAGE_ROUTE}><Button text="Sign Up" colour="white" /></Link>
            </div>}
        </div>
    )
}