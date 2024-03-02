import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

export function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 max-w-[1480px]">
        <Home />
      </main>
      <Footer />
    </>
  );
}
