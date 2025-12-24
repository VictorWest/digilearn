import FullLogo from "./full-logo";

export default function Footer(){
    return(
        <div className="flex justify-between bg-white text-black">
            <div className="text-center">
                <FullLogo />
                <p className="">Enhancing skills and increasing accessible learning for students and professionals worldwide.</p>
            </div>
        </div>
    )
}