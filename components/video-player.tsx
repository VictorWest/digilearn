import { toYouTubeEmbed } from "@/lib/utils/scripts";
import { Suspense } from "react";
import { CiClock2 } from "react-icons/ci";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import StarRatings from "react-star-ratings";
import Button from "./button";
import { IoIosAdd } from "react-icons/io";
import { CourseDetail } from "@/lib/shared/interface";

export default function VideoPlayer({ courseData, currentModule }: { courseData: CourseDetail | undefined, currentModule: any }){
    return (
        <div className="w-180 space-y-5">
            <Suspense fallback={<p>Loading video...</p>}>
                <iframe 
                    className="w-full h-100 rounded-2xl border-8 border-gray-200"
                    src={toYouTubeEmbed(courseData?.syllabus[currentModule.module].lessons[currentModule.lesson].url || null)}
                    allowFullScreen loading="lazy" title={courseData?.title}></iframe>
            </Suspense>
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold">{courseData?.title}</h1>
                <Button colour="white" text={<p className="flex items-center text-xs"><IoIosAdd /> Add to Library</p>} />
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 *:flex *:gap-1 *:items-center">
                <div className="flex items-center">
                    <StarRatings rating={courseData?.stat.rating} starRatedColor="#ffd700" starEmptyColor="gray" starDimension="15px" starSpacing="1px" numberOfStars={5} />
                    <p>{courseData?.stat.rating} ({courseData?.stat.reviews} reviews)</p>
                </div>
                <p><PiChalkboardTeacherThin />{courseData?.stat.students} students</p>
                <p><CiClock2 />{courseData?.stat.totalHours} hours</p>
                <p><MdOutlinePlaylistPlay />{courseData?.stat.numberOfLectures} lectures</p>
                <p></p>
            </div>
        </div>
    )
}