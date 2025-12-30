"use client"
import VideoPlayer from "@/components/video-player"
import { CourseDetail, courseDetails } from "@/utils/data"
import { toYouTubeEmbed } from "@/utils/scripts"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function CourseDetailPage({ id }: { id: string | number}){
    const [ courseData, setCourseData ] = useState<CourseDetail>()
    const [ currentModule, setCurrentModule ] = useState({ module: 0, lesson: 0 })
    
    useEffect(() => {
        const data = courseDetails.find(item => item.courseId === id)

        if (!data){
            redirect('/course-catalog')
        }
        setCourseData(data)
    }, [])

    return (
        <div className="bg-white p-10">
            <VideoPlayer courseData={courseData} currentModule={currentModule} />
        </div>
    )
}