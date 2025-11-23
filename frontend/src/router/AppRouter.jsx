import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

// Páginas
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";

// Servicios
import Lidar from "../pages/servicios/Lidar";
import Fotogrametria from "../pages/servicios/Fotogrametria";
import Cartografia from "../pages/servicios/Cartografia";
import Capacitacion from "../pages/servicios/Capacitacion";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Servicios */}
          <Route path="/servicios/lidar" element={<Lidar />} />
          <Route path="/servicios/fotogrametria" element={<Fotogrametria />} />
          <Route path="/servicios/cartografia" element={<Cartografia />} />
          <Route path="/servicios/capacitacion" element={<Capacitacion />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
