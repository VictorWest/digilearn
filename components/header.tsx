import { COURSE_CATALOG_ROUTE, HOME_ROUTE, THEME_COLOUR } from "@/shared/constants";
import Image from "next/image";
import Button from "./button";
import FullLogo from "./full-logo";
import Link from "next/link";

export default function Header(){
    return (
        <div className="bg-white flex justify-between px-10 py-4 text-black border-b border-stone-200">
            <FullLogo />
            <div className={`flex items-center gap-3 text-sm *:hover:text-[${THEME_COLOUR}] cursor-pointer`}>
                <Link href={HOME_ROUTE}>Home</Link>
                <Link href={COURSE_CATALOG_ROUTE}>Courses</Link>
            </div>
            <div className="flex items-center gap-3">
                <Button background="#fff" text="Log In" />
                <Button text="Sign Up" colour="white" />
            </div>
        </div>
    )
}