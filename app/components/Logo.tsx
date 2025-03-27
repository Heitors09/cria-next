import { Earth, EarthIcon, PlaneTakeoff } from "lucide-react";

export default function Logo() {
    return (
        <div className="flex items-center gap-2">
            <Earth className="lg:size-8 size-6"/>
        <h1 className="lg:text-2xl flex items-end text-xl 
          font-extrabold">
            Cria<span className="bg-gradient-to-b from-sky-400 via-sky-500 to-blue-700 text-transparent bg-clip-text">Next</span>
        </h1>

        </div>
    )
}