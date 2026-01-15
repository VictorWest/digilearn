import LoginPage from "@/pages/LoginPage";
import { HOME_ROUTE } from "@/lib/shared/constants";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page(){
    const session = await getServerSession()
        
    if (session){
        redirect(HOME_ROUTE)
    }

    return(
        <div className="bg-white text-black">
            <LoginPage register/>
        </div>
    )
}