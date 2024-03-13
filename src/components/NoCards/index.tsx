import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function NoCards() {
    return (
        <Link to="/edit-barbecue" className="flex items-center justify-center h-[200px] w-full bg-amber-100 hover:bg-amber-200 hover:cursor-pointer col-span-4 rounded-md ring-1 ring-amber-400 select-none">
            <div className="flex flex-col gap-2 items-center text-center text-balance max-w-96 text-amber-950">
                <PlusCircle size={42} className="text-amber-950" />
                <p>Ainda não há churrascos cadastrados, gostaria de adicionar um?</p>
            </div>
        </Link>
    )
}