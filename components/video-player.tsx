import { CourseDetail } from "@/utils/data";
import { toYouTubeEmbed } from "@/utils/scripts";
import { Suspense } from "react";
import { CiStar, CiClock2 } from "react-icons/ci";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { MdOutlinePlaylistPlay } from "react-icons/md";

export default function VideoPlayer({ courseData, currentModule }: { courseData: CourseDetail | undefined, currentModule: any }){
    return (
        <div className="w-180 text-black space-y-5">
            <Suspense fallback={<p>Loading video...</p>}>
                <iframe 
                    className="w-full h-100 rounded-2xl border-8 border-gray-200"
                    src={toYouTubeEmbed(courseData?.syllabus[currentModule.module].lessons[currentModule.lesson].url || null)}
                    allowFullScreen loading="lazy" title={courseData?.title}></iframe>
            </Suspense>
            <h1 className="text-3xl font-bold">{courseData?.title}</h1>
            <div className="flex items-center gap-3 text-sm text-gray-600 *:flex *:gap-1 *:items-center">
                <p><CiStar className="text-amber-600" />{courseData?.stat.rating} ({courseData?.stat.reviews} reviews)</p>
                <p><PiChalkboardTeacherThin />{courseData?.stat.students} students</p>
                <p><CiClock2 />{courseData?.stat.totalHours} hours</p>
                <p><MdOutlinePlaylistPlay />{courseData?.stat.numberOfLectures} lectures</p>
                <p></p>
            </div>
        </div>
    )
}