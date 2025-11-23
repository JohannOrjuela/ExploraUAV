import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import "../styles/layout.css";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
