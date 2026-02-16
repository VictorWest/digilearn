"use client"
// import CourseInfo from "@/components/course-info"
// import CourseSyllabus from "@/components/course-syllabus"
// import VideoPlayer from "@/components/video-player"
// import { useCourseContext, CourseProvider } from "@/context/CourseContext"
// import { COURSE_CATALOG_ROUTE } from "@/lib/shared/constants"
// import { courseDetails } from "@/lib/utils/data"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

export default function CourseDetailPage({ id }: { id: string | number}){
    // const router = useRouter()

    // const { courseData, setCourseData, currentModule } = useCourseContext()
    
    // useEffect(() => {
    //     const data = courseDetails.find(item => item.courseId === id)

    //     if (!data){
    //         router.push(COURSE_CATALOG_ROUTE)
    //         return
    //     }
    //     setCourseData(data)
    // }, [id])

    return (
        // <CourseProvider>
        //     <div className="bg-white p-10 text-black flex">
        //         <div>
        //             <VideoPlayer courseData={courseData} currentModule={currentModule} />
        //             <CourseInfo courseData={courseData} />
        //         </div>
        //         <div className="w-full px-4">
        //             <CourseSyllabus courseData={courseData} />
        //         </div>
        //     </div>
        // </CourseProvider>
        <div>Course Data</div>
    )
}