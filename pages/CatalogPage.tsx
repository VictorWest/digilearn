import FiltersNavbar from "@/components/filters-navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MainFeaturedCourses from "@/components/main-featured-courses";

export default function CatalogPage(){
    return (
        <>
            <Header />
            <div className="flex gap-10 bg-white text-black">
                <div className="w-1/5 border-r border-stone-200"><FiltersNavbar /></div>
                <div className="w-4/5"><MainFeaturedCourses /></div>
            </div>
            <Footer />
        </>
    )
}