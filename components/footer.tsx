import FullLogo from "./full-logo";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Footer(){
    return(
        <div className="flex justify-center *:w-80 gap-10 *:text-start items-center bg-[#F3F4F6] text-black h-40 p-5">
            <div className="space-y-2">
                <FullLogo />
                <p className="text-sm text-gray-600">Enhancing skills and increasing accessible learning for students and professionals worldwide.</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                {/* <p className="font-semibold">Quick Links</p> */}
                <div className="text-sm text-gray-600 text-center">
                    <p>Home</p>
                    <p>Courses</p>
                    <p>About us</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
                <p className="font-semibold">Connect with us</p>
                <div className="flex items-center gap-5 text-gray-600">
                    <FaXTwitter />
                    <FaInstagram />
                    <FaGithub />
                </div>
                <p className="text-xs">© {new Date().getFullYear()} DigiLearn. All rights reserved.</p>
            </div>
        </div>
    )
}