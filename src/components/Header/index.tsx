import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center justify-around p-5 bg-amber-500 mb-8">
      <h1 className="text-2xl font-bold tracking-wide">Churrascômetro</h1>
      <nav>
        <ul className="flex gap-4 font-semibold">
          <li>
            <Link to="/" className="bg-amber-600 px-4 py-3 rounded-md">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/edit-barbecue"
              className="bg-amber-600 px-4 py-3 rounded-md"
            >
              Criar Churrasco
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
