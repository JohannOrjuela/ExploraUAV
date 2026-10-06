import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import ScrollToTop from "../components/ui/ScrollToTop";

// Páginas
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Proyectos from "../pages/Proyectos";

// Servicios
import Lidar from "../pages/servicios/Lidar";
import Fotogrametria from "../pages/servicios/Fotogrametria";
import Cartografia from "../pages/servicios/Cartografia";
import Capacitacion from "../pages/servicios/Capacitacion";
import Catastro from "../pages/servicios/Catastro";

const PortfolioJohann = lazy(() => import("../pages/portfolioJohann/PortfolioJohann"));

function PortfolioLoader() {
  return (
    <div className="portfolio-route-loader" role="status" aria-live="polite">
      <span>INITIALIZING PORTFOLIO TERMINAL</span>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route
          path="/portafolio-Johann"
          element={
            <Suspense fallback={<PortfolioLoader />}>
              <PortfolioJohann />
            </Suspense>
          }
        />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proyectos" element={<Proyectos />} />

          {/* Servicios */}
          <Route path="/servicios/lidar" element={<Lidar />} />
          <Route path="/servicios/fotogrametria" element={<Fotogrametria />} />
          <Route path="/servicios/cartografia" element={<Cartografia />} />
          <Route path="/servicios/capacitacion" element={<Capacitacion />} />
          <Route path="/servicios/catastro" element={<Catastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
