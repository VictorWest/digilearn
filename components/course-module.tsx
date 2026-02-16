"use client"
import { useCourseContext } from "@/context/CourseContext";
import { THEME_COLOUR } from "@/lib/shared/constants";
import { CourseModule as ModuleType } from "@/lib/shared/interface";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function CourseModule({ item }: { item: ModuleType }){
    const { currentModule, setCurrentModule } = useCourseContext()
    const { moduleNumber, moduleName } = item

    const [ showLessons, setShowLessons ] = useState(false)

    const handleChangeLesson = (moduleNumber: number, lessonNumber: number) => {
        setCurrentModule({ module: moduleNumber - 1, lesson: lessonNumber})
    }

    return(
        <div>
            <div onClick={() => setShowLessons(prev => !prev)} className="flex items-center justify-between px-1 py-3 border-b border-stone-300 cursor-pointer hover:bg-gray-50">
                <div>
                    <p className="font-semibold">Module {moduleNumber}: {moduleName}</p>
                    {!showLessons && <p className="text-gray-600 text-xs">{item.lessons.length} lessons • {item.totalHours} hours</p>}
                </div>
                {showLessons ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </div>
            {showLessons && 
                <div className="bg-gray-50 px-3 py-1 text-sm space-y-3">
                    {item.lessons.map((item, index) => (
                        <div onClick={() => handleChangeLesson(moduleNumber, index)}
                            key={index}
                            style={{ 
                                "--theme": THEME_COLOUR, 
                                color: (currentModule.module === moduleNumber - 1 && currentModule.lesson === index) ? THEME_COLOUR : "black" } as React.CSSProperties} 
                            className={`cursor-pointer hover:text-(--theme)`}
                        >{index + 1}. {item.title}</div>
                    ))}
                </div>
            }
        </div>
    )
}