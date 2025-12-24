export default function ChooseCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string}){
    return (
        <div className="flex gap-2 border border-stone-50 shadow px-3 py-5 rounded-md">
            <div className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full">
                {icon}
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    )
}