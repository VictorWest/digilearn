import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyChoose from "@/components/why-choose";

export default function HomePage(){
    return (
        <>
            {/* <Header /> */}
            <Hero />
            <FeaturedSection />
            <WhyChoose />
            {/* <Footer /> */}
        </>
    )
}