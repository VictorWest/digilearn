"use client"
import Button from "@/components/button"
import CourseCard from "@/components/course-card"
import { COURSE_CATALOG_ROUTE } from "@/lib/shared/constants"
import { Course, featuredCoursesArray } from "@/lib/utils/data"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LearnerDashboard(){
    const [ enrolledCourses, setEnrolledCourses ] = useState([])
    const [ featuredCourses, setFeaturedCourses ] = useState<Course[]>([])

    useEffect(() => {        
        const reviewFilter = featuredCoursesArray.filter((_, index) => index < 3)
        setFeaturedCourses(reviewFilter)
    }, [])
    
    return(
        <div className="bg-white p-10 text-black">
            <h1 className="text-3xl font-bold">Learner Dashboard</h1>
            {enrolledCourses.length > 0 ? 
                <div className="px-10">
                    <h2 className="text-2xl font-bold">Your Enrolled Courses</h2>
                    {/* Enrolled courses to be added */}
                </div> : 
                <div className="flex flex-col items-center justify-center gap-3 py-10">
                    <p>No enrolled courses</p>
                    <Link href={COURSE_CATALOG_ROUTE}><Button text="Go to Courses" colour="white" /></Link>
                </div>
            }
            <div className="px-10 space-y-5">
                <h2 className="text-2xl font-bold">Recommended for You</h2>
                <div className="flex gap-5">
                    {featuredCourses?.map((item, index) => (
                        <div key={index} className="w-70"><CourseCard courseInfo={item} main /></div>
                    ))}
                </div>
            </div>
        </div>
    )
}