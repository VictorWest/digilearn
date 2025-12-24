import { THEME_COLOUR } from "@/shared/constants";

export default function Button({background=THEME_COLOUR, text, colour="black"} : {background?: string, text: string, colour?: string}){
    return <div style={{ background, color: colour }} className="rounded-md flex justify-center hover:opacity-80 px-3 py-2 text-sm font-semibold cursor-pointer">
        { text }
    </div>
}