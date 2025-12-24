import { THEME_COLOUR } from "@/shared/constants";
import Image from "next/image";
import Button from "./button";
import FullLogo from "./full-logo";

export default function Header(){
    return (
        <div className="bg-white flex justify-between px-10 py-4 text-black">
            <FullLogo />
            <div className="flex items-center gap-3 text-sm">
                <p>Home</p>
                <p>Courses</p>
            </div>
            <div className="flex items-center gap-3">
                <Button background="#fff" text="Log In" />
                <Button text="Sign Up" colour="white" />
            </div>
        </div>
    )
}