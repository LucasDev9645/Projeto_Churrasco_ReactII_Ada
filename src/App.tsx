import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { Rotas } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="container mx-auto px-4 max-w-[1480px]">
        <Rotas />
        <Toaster />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
