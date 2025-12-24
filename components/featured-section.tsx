"use client"
import { useEffect, useState } from "react";
import Button from "./button";
import Input from "./input";
import { Course, featuredCoursesArray } from "@/utils/data";
import CourseCard from "./course-card";

export default function FeaturedSection(){
    const [ featuredCourses, setFeaturedCourses ] = useState<Course[]>()

    useEffect(() => {
        setFeaturedCourses(featuredCoursesArray)
    }, [])

    return(
        <div className="bg-white text-black pt-10 space-y-15 *:w-full *:flex *:flex-col *:items-center">
            <section className=" space-y-3">
                <h1 className="text-2xl font-bold">Find Your Next Learning Path</h1>
                <p className="text-gray-600 text-sm">Explore a vast library of courses curated by industry experts.</p>
                <div className="flex gap-2">
                    <Input placeholder="Search for courses, topics, or instructors..." />
                    <Button text="Search" colour="white" />
                </div>
            </section>
            <main>
                <h1 className="text-2xl font-bold">Featured Courses</h1>
                <div className="grid grid-cols-3 px-15 py-10 space-x-10 space-y-10">
                    {featuredCourses?.map((item, index) => (
                        <div key={index}><CourseCard courseInfo={item} /></div>
                    ))}
                </div>
            </main>
        </div>
    )
}