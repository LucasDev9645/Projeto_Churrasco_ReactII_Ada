import { ChefHat, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-neutral-800 text-neutral-50 mb-12 border-amber-500 border-b-4">
      <div className="max-w-[1480px] mx-auto flex flex-wrap gap-4 items-center justify-around sm:justify-between p-5">
        <h1 className="font-Staatliches text-2xl font-bold tracking-wide">
          <Link to="/" className="flex items-start gap-2 hover:text-amber-500"><ChefHat size={28}/>Churrascômetro</Link>
        </h1>
        <nav>
          <ul className="flex gap-4 font-semibold">
            <li><Link reloadDocument to="/edit-barbecue" className="flex items-center gap-2 px-4 py-3 rounded-md bg-amber-300 border-2 border-amber-400 hover:bg-amber-400 text-neutral-800 hover:text-amber-950"><PlusCircle />Criar Churrasco</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}