export function Header() {
  return (
    <header className="flex items-center justify-around p-5 bg-amber-500 mb-12">
      <h1 className="text-2xl font-bold tracking-wide"><a href="#">Churrascômetro</a></h1>
      <nav>
        <ul className="flex gap-4 font-semibold">
          {/* <li><a href="#" className="bg-amber-600 px-4 py-3 rounded-md">Home</a></li> */}
          <li><a href="#" className="bg-amber-600 px-4 py-3 rounded-md">Criar Churrasco</a></li>
        </ul>
      </nav>
    </header>
  );
}
