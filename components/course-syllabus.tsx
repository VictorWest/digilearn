import { CourseDetail } from "@/utils/data";
import CourseModule from "./course-module";

export default function CourseSyllabus({ courseData }: {courseData: CourseDetail | undefined }){
    return (
        <div className="space-y-3">
            <h2 className="text-2xl font-bold">Course Syllabus</h2>
            <div>
                {courseData?.syllabus.map((item, index) => (
                    <CourseModule key={index} item={item} />
                ))}
            </div>
        </div>
    )
}