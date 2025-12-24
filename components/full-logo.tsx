import { THEME_COLOUR } from "@/shared/constants";
import Image from "next/image";

export default function FullLogo(){
    return <div style={{ color: THEME_COLOUR}} className="flex items-center gap-1 text-lg font-bold">
        <Image src="/main/digilearn-logo.png" width={30} height={30} alt="DigiLearn Logo" />
        DigiLearn
    </div>
}