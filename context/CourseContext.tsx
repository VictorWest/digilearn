"use client"
import { Course, CourseDetail } from "@/lib/shared/interface";
import { featuredCoursesArray, initialCourseDetail } from "@/lib/utils/data";
import { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext<any>(undefined)

export const CourseProvider = ({ children }: any) => {
    const [ featuredCourses, setFeaturedCourses ] = useState<Course[]>()
    const [ filteredCourses, setFilteredCourses ] = useState<Course[]>()
    const [ selectedCategories, setSelectedCategories ] = useState<string[]>([])
    const [ selectedLevels, setSelectedLevels ] = useState<string[]>([])
    
    const [ courseData, setCourseData ] = useState<CourseDetail>({
        courseId: "",
        title: "",
        stat: {
            rating: 0,
            reviews: 0,
            students: 0,
            totalHours: 0,
            numberOfLectures: 0
        },
        tutor: {
            name: "",
            details: "",
            occupation: "",
            profileSrc: ""
        },
        overview: {
            main: "",
            deliverables: []
        },
        syllabus: []
    })  
    
    const [ currentModule, setCurrentModule ] = useState({ module: 0, lesson: 0 })

    useEffect(() => {
        setFeaturedCourses(featuredCoursesArray)
        setFilteredCourses(featuredCoursesArray)
    }, [])

    useEffect(() => {
        // const filteredArray = featuredCourses?.filter(item => (selectedCategories.length !== 0 ? selectedCategories.includes(item.category) : item) && (selectedLevels.length !== 0 ? selectedLevels.includes(item.level) : item))
        if (selectedCategories.length == 0 && selectedLevels.length == 0){
            setFilteredCourses(featuredCoursesArray)
        } else {
            setFilteredCourses(featuredCourses?.filter(item => (selectedCategories.length !== 0 ? selectedCategories.includes(item.category) : item) && (selectedLevels.length !== 0 ? selectedLevels.includes(item.level) : item)))
        }
    }, [selectedCategories, selectedLevels])

    return(
        <CourseContext.Provider value={{
                                        featuredCourses, setFeaturedCourses,
                                        filteredCourses, setFilteredCourses,
                                        selectedCategories, setSelectedCategories,
                                        selectedLevels, setSelectedLevels,
                                        courseData, setCourseData,
                                        currentModule, setCurrentModule
                                    }}>
            { children }
        </CourseContext.Provider>
    )
}

export const useCourseContext = () => useContext(CourseContext)