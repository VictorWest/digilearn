"use client"
import { Course, featuredCoursesArray } from "@/utils/data";
import { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext<any>(undefined)

export const CourseProvider = ({ children }: any) => {
    const [ featuredCourses, setFeaturedCourses ] = useState<Course[]>()
    const [ selectedCategories, setSelectedCategories ] = useState<string[]>([])
    const [ selectedLevels, setSelectedLevels ] = useState<string[]>([])
    
    useEffect(() => {
        setFeaturedCourses(featuredCoursesArray)
    }, [])

    useEffect(() => {
        
    }, [selectedCategories, selectedLevels])

    return(
        <CourseContext.Provider value={{
                                        featuredCourses, setFeaturedCourses,
                                        selectedCategories, setSelectedCategories,
                                        selectedLevels, setSelectedLevels
                                    }}>
            { children }
        </CourseContext.Provider>
    )
}

export const useCourseContext = () => useContext(CourseContext)