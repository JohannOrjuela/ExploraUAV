import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { Outlet } from "react-router-dom";
import "../styles/layout.css";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
