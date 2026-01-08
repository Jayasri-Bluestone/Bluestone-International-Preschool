import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopBar from "./components/Top";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import About from "./Section/About";
import Programs from "./Section/Program";
import ContactUs from "./Section/Contact";
import Admissions from "./components/Admissions";
import Gallery from "./Section/Gallery";
import Testimonials from "./Section/Testimonials";
import ScheduleVisit from "./components/ScheduleVisit";
import AboutBluestone from "./components/AboutBluestone";

//Programs
import NestlersProgram from "./Pages/Program/Nestler";
import BambinoProgram from "./Pages/Program/Babino";
import BjrProgram from "./Pages/Program/B Junior";
import BsrProgram from "./Pages/Program/B Senior";

// Scroll To Top
import ScrollToTop from "./components/ScrollToTop";
import Curriculum from "./components/Courses";
import Centers from "./components/Centers";
import AboutFranchise from "./components/AboutFranchise";
import Blog from "./components/Blog";
import Daycare from "./components/Daycare";
import SummerClub from "./components/SummerClub";


export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <ScrollToTop />   {/* <-- This makes all pages start at top */}

      <main className="min-h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Programs />} />
           <Route path="/program/nestlers" element={<NestlersProgram />} />
           <Route path="/program/bambino" element={<BambinoProgram />} />
          <Route path="/program/b-junior" element={<BjrProgram />} />
           <Route path="/program/b-senior" element={<BsrProgram />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/schedule-visit" element={<ScheduleVisit />} />
          <Route path="/about-bluestone" element={<AboutBluestone />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/centres" element={<Centers />} />
          <Route path="/franchise" element={<AboutFranchise />} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/daycare" element={<Daycare/>} />
          <Route path="/summer-club" element={<SummerClub/>} />



        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
