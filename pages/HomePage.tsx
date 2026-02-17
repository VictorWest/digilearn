import FeaturedSection from "@/components/featured-section";
import Hero from "@/components/hero";
import WhyChoose from "@/components/why-choose";
import { getServerSession } from "next-auth";

export default async function HomePage(){
    const session = await getServerSession()

    return (
        <>
            {/* <Header /> */}
            <Hero session={session} />
            <FeaturedSection />
            <WhyChoose />
            {/* <Footer /> */}
        </>
    )
}