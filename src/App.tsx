import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { BarbecueProvider } from "./context/calc";
import { Header } from "./components/Header";
import { Rotas } from "./routes";

export function App() {
  return (
    <BrowserRouter>
      <BarbecueProvider>
        <Header />
        <main className="container mx-auto px-4 max-w-[1480px]">
          <Rotas />
          <Toaster />
        </main>
      </BarbecueProvider>
    </BrowserRouter>
  );
}
