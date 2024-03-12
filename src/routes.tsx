import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { EditBarbecue } from "./pages/EditBarbecue";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit-barbecue/:id?" element={<EditBarbecue />} />
    </Routes>
  );
}
