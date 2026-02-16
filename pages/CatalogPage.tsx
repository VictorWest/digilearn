"use client"
import FiltersNavbar from "@/components/filters-navbar";
import MainFeaturedCourses from "@/components/main-featured-courses";
import { CourseProvider } from "@/context/CourseContext";

export default function CatalogPage(){
    return (
        <CourseProvider>
            {/* <Header /> */}
            <div className="flex gap-10 bg-white text-black">
                <div className="w-1/5 border-r border-stone-200"><FiltersNavbar /></div>
                <div className="w-4/5"><MainFeaturedCourses /></div>
            </div>
            {/* <Footer /> */}
        </CourseProvider>
    )
}