"use client"
import { courseCategories, courseLevels } from "@/utils/data";
import { useState } from "react"
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import { useCourseContext } from "@/context/CourseContext";

type FilterType = "Category" | "Level" | "Price"

export default function FiltersNavbar(){
    const  { selectedCategories, setSelectedCategories, selectedLevels, setSelectedLevels } = useCourseContext()
    
    const [ showFilter, setShowFilter ] = useState({ category: true, level: true, price: true })

    const handleAddFilter = (filter: string, filterType: FilterType) => {
        if (filterType == "Category"){
            const filterExists = selectedCategories.find((item: any) => item === filter)
            if (filterExists){
                setSelectedCategories((prev: any) => prev.filter((item: any) => item !== filter))
            } else {
                setSelectedCategories((prev: any) => ([...prev, filter]))
            }
        }

        if (filterType == "Level"){
            const filterExists = selectedLevels.find((item: any) => item === filter)
            if (filterExists){
                setSelectedLevels((prev: any) => prev.filter((item: any) => item !== filter))
            } else {
                setSelectedLevels((prev: any) => ([...prev, filter]))
            }
        }
    }

    return(
        <div className="m-5">
            <h2 className="font-semibold text-2xl">Filters</h2>
            <div className="pt-5 space-y-3">
                <div onClick={() => setShowFilter(prev => ({...prev, category: !prev.category}))} className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg">Categories ({selectedCategories.length})</h3>
                    {showFilter.category ? <FaChevronDown className="text-xs" /> : <FaChevronUp className="text-xs" />}
                </div>
                {showFilter.category && <div className="space-y-1">
                    {courseCategories.map((item, index) => (
                        <div key={`${item}${index}`} onClick={() => handleAddFilter(item, "Category")} className={`flex items-center gap-2 text-sm cursor-pointer ${selectedCategories.includes(item) ? "text-black" : "text-stone-600"} hover:text-black`}>
                            {selectedCategories.includes(item) ? <IoIosCheckbox /> : <MdCheckBoxOutlineBlank />}
                            <p>{item}</p>
                        </div>
                    ))}
                </div>}
            </div>
            <div className="pt-5 space-y-3">
                <div onClick={() => setShowFilter(prev => ({...prev, level: !prev.level}))} className="flex justify-between items-center cursor-pointer">
                    <h3 className="text-lg">Levels ({selectedLevels.length})</h3>
                    {showFilter.level ? <FaChevronDown className="text-xs" /> : <FaChevronUp className="text-xs" />}
                </div>
                {showFilter.level && <div className="space-y-1">
                    {courseLevels.map((item, index) => (
                        <div key={`${item}${index}`} onClick={() => handleAddFilter(item, "Level")} className={`flex items-center gap-2 text-sm cursor-pointer ${selectedLevels.includes(item) ? "text-black" : "text-stone-600"} hover:text-black`}>
                            {selectedLevels.includes(item) ? <IoIosCheckbox /> : <MdCheckBoxOutlineBlank />}
                            <p>{item}</p>
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    )
}