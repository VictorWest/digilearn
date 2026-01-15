import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { MdPeople } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { THEME_COLOUR } from "@/lib/shared/constants";
import ChooseCard from "./choose-card";
import { mainReview } from "@/lib/utils/data";
import Button from "./button";

export default function WhyChoose(){
    return(
        <div className="bg-white text-black space-y-15 pb-15 *:w-full *:flex *:flex-col *:items-center">
            <section className="space-y-5 px-30">
                <h1 className="text-2xl font-bold">Why Choose DigiLearn</h1>
                <div className="w-full flex gap-15 *:w-1/2">
                    <div className="space-y-5">
                        <ChooseCard
                            icon={<HiOutlineLightningBolt style={{ color: THEME_COLOUR }} className="text-xl" />}
                            title="Expert-Led Instruction"
                            desc="Learn from top industry professionals and academic leaders with years of experience."
                        />
                        <ChooseCard
                            icon={<IoBookOutline style={{ color: THEME_COLOUR }} className="text-xl" />}
                            title="Flexible Learning Schedule"
                            desc="Access courses anytime, anywhere, at your own pace to fit your busy life."
                        />
                        <ChooseCard
                            icon={<MdPeople style={{ color: THEME_COLOUR }} className="text-xl" />}
                            title="Interactive Community Support"
                            desc="Engage with a vibrant community of learners and get support from instructors."
                        />
                        <ChooseCard
                            icon={<IoMdCheckmarkCircleOutline style={{ color: THEME_COLOUR }} className="text-xl" />}
                            title="Globally Recognized Certificates"
                            desc="Earn certificates that enhance your resume and boost your career prospects."
                        />
                    </div>
                    <div className="bg-[#F8FCFF] flex justify-center items-center border border-stone-100 shadow rounded-lg px-5">
                        <div className="text-center text-sm space-y-4">
                            <RiDoubleQuotesL style={{ color: THEME_COLOUR }} className="text-3xl font-bold mx-auto" />
                            <p className="italic">"{mainReview.review}"</p>
                            <div>
                                <p className="font-bold">{mainReview.author}</p>
                                <p className="text-xs">{mainReview.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="space-y-4">
                <h1 className="text-2xl font-bold">Ready to Start Your Learning Journey?</h1>
                <p className="text-sm text-stone-600">Join thousands of learners worldwide and achieve your professional and personal goals with DigiLearn.</p>
                <Button text="Start Learning Now" colour="white" />
            </section>
        </div>
    )
}