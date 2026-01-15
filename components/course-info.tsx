import { THEME_COLOUR } from "@/lib/shared/constants";
import { CourseDetail } from "@/lib/utils/data";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import StarRatings from "react-star-ratings"

export default function CourseInfo({ courseData }: {courseData: CourseDetail | undefined }){
    return (
        <div className="mt-5 space-y-5 *:space-y-3">
            <div>
                <h2 className="text-xl font-bold">Instructor</h2>
                <div className="flex items-center gap-3">
                    <Image className="rounded-full" src={courseData?.tutor.profileSrc || "/course/profile.png"} width={30} height={30} alt={"Tutor " + courseData?.tutor.name } />
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold">{courseData?.tutor.name}</p>
                            <p className="text-xs text-gray-600">{courseData?.tutor.occupation}</p>
                        </div>
                        <p className="w-180 text-sm">{courseData?.tutor.details}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-bold">Course Overview</h2>
                <p className="w-180 text-sm">{courseData?.overview.main}</p>
            </div>
            <div>
                <h2 className="text-xl font-bold">What You'll Learn</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                    {courseData?.overview.deliverables.map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                            <FaCheck style={{ color: THEME_COLOUR }}/>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* <div>
                <h2 className="text-xl font-bold">Student Reviews</h2>
                <div className="flex items-center gap-2">
                    <p className="text-xl font-bold">{courseData?.stat.rating}</p>
                    <StarRatings rating={courseData?.stat.rating} starRatedColor="#ffd700" starEmptyColor="gray" starDimension="15px" starSpacing="1px" />
                    <p className="text-gray-600 text-xs font-semibold">({courseData?.stat.reviews} reviews)</p>
                </div>
            </div> */}
        </div>
    )
}