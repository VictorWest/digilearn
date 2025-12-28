"use client"
import { CourseDetail, courseDetails } from "@/utils/data"
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"

export default function CourseDetailPage({ id }: { id: string | number}){
    const [ courseData, setCourseData ] = useState<CourseDetail>()

    useEffect(() => {
        const data = courseDetails.find(item => item.courseId === id)

        if (!data){
            redirect('/course-catalog')
        }
        setCourseData(data)
    }, [])

    return (
        <div>
            {courseData?.title}
        </div>
    )
}