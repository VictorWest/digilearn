import { COURSE_DETAIL_ROUTE, THEME_COLOUR } from "@/shared/constants";
import { Course } from "@/utils/data";
import Image from "next/image";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import Button from "./button";
import Link from "next/link";

export default function CourseCard({ courseInfo, main }: { courseInfo: Course, main?: boolean }){
    const { imageUrl, title, tutor, price, rating, reviews, courseId } = courseInfo

    return (
        <div className="relative rounded-md shadow-xl border border-stone-300 h-100 cursor-pointer hover:scale-102">
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
                <div className="flex items-center space-x-1 text-xs">
                    <CiStar className="text-amber-600" />
                    <p>{rating}</p>
                    <p>({reviews} reviews)</p>
                </div>
            </div>
            {main && <Link href={`${COURSE_DETAIL_ROUTE}/${courseId}`} className="w-full px-5 absolute bottom-10"><Button text="View Course" colour="white" /></Link>}
        </div>
    )
}