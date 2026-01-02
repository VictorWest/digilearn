import { CiSearch } from "react-icons/ci";

export default function Input({ type="text", placeholder="Search", search=true }){
    return (
        <div className="relative w-full flex items-center">
            {search && <CiSearch className="text-lg absolute ml-2" />}
            <input type={type} placeholder={placeholder} className="w-120 rounded-md outline-0 border border-stone-300 px-3 pl-7 py-1.5 text-sm" />
        </div>
    )
}