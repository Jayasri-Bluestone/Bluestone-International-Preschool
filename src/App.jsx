import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/Top";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Program";
import ContactUs from "./pages/Contact";
import Admissions from "./pages/Admissions";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Programs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admissions" element={<Admissions />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}
