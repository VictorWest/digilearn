"use client"
import { THEME_COLOUR } from "@/shared/constants";
import Button from "./button";
import Input from "./input";
import { IoBookOutline } from "react-icons/io5";
import CourseCard from "./course-card";
import { useCourseContext } from "@/context/CourseContext";

export default function MainFeaturedCourses(){
    const { filteredCourses } = useCourseContext()

    return(
        <div className="m-5 mt-7 space-y-5">
            <div className="flex justify-center gap-5">
                <div>
                    <Input placeholder="Search for courses..." />
                </div>
                <Button text="Search" colour="white" />
            </div>
            <div style={{ color: THEME_COLOUR }} className="flex justify-between items-center px-10 py-5 bg-stone-100/50 rounded-md">
                <div className="text-xl flex items-center gap-3 font-semibold">
                    <IoBookOutline />
                    <p>Featured Courses</p>
                </div>
                <div className="text-sm">View All</div>
            </div>
            <div className="grid grid-cols-3 space-x-10 space-y-10">
                {filteredCourses?.map((item: any, index: any) => (
                    <div key={index} className="w-70"><CourseCard courseInfo={item} main /></div>
                ))}
            </div>
        </div>
    )
}