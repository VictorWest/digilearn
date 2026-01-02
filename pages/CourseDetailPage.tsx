"use client"
import CourseInfo from "@/components/course-info"
import CourseSyllabus from "@/components/course-syllabus"
import VideoPlayer from "@/components/video-player"
import { useCourseContext } from "@/context/CourseContext"
import { courseDetails } from "@/utils/data"
import { redirect } from "next/navigation"
import { useEffect } from "react"

export default function CourseDetailPage({ id }: { id: string | number}){
    const { courseData, setCourseData, currentModule } = useCourseContext()
    
    useEffect(() => {
        const data = courseDetails.find(item => item.courseId === id)

        if (!data){
            redirect('/course-catalog')
        }
        setCourseData(data)
    }, [])

    return (
        <div className="bg-white p-10 text-black flex">
            <div>
                <VideoPlayer courseData={courseData} currentModule={currentModule} />
                <CourseInfo courseData={courseData} />
            </div>
            <div className="w-full px-4">
                <CourseSyllabus courseData={courseData} />
            </div>
        </div>
    )
}