import { THEME_COLOUR } from "@/shared/constants";
import { Course } from "@/utils/data";
import Image from "next/image";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { CiStar } from "react-icons/ci";

export default function CourseCard({ courseInfo }: { courseInfo: Course }){
    const { imageUrl, title, tutor, price, rating } = courseInfo

    return (
        <div className="rounded-md shadow-xl border border-stone-300 w-90 h-90 cursor-pointer hover:scale-102">
            <div className="relative aspect-video w-full">
                <Image className="rounded-t-md object-cover" src={`${imageUrl}`} fill alt={title + ": " + tutor} />
                <p style={{ background: THEME_COLOUR }} className={`absolute top-2 right-2 rounded-md text-xs font-semibold p-1 text-white`}>{price == 0 ? "Free" : `$${price}`}</p>
            </div>
            <div className="p-5 space-y-2">
                <p className="text-lg font-semibold">{title}</p>
                <div className="text-xs flex items-center gap-2">
                    <PiChalkboardTeacherThin />
                    <p>{tutor}</p>
                </div>
                <div className="flex items-center">
                    {[...Array(5)].map(() => {
                        return <CiStar className="text-amber-600" />
                    })}
                    <p className="ml-1 text-xs">({rating})</p>
                </div>
            </div>
        </div>
    )
}