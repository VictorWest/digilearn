import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomePage(){
    return (
        <>
            <Header />
            <div className="absolute bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}