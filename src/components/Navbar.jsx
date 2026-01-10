import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "../assets/BLUES.png";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaBuilding,
  FaSun,
  FaUsers,
  FaHandshake,
  FaNewspaper,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGraduationCap,
  FaJoint,
  FaBookOpen,
  FaIndustry,
} from "react-icons/fa";

// Accept the onBlogClick prop from App.js
export default function Navbar({ onBlogClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

  // We handle "BLOGS" separately in the map logic now
  const menuItems = ["FRANCHISE", "BLOGS", "CURRICULUM", "CENTRES"];

  const programs = [
    { name: "Nestlers", path: "/program/nestlers" },
    { name: "Bambino", path: "/program/bambino" },
    { name: "B Junior", path: "/program/b-junior" },
    { name: "B Senior", path: "/program/b-senior" },
  ];

  const mobileMenu = [
    { name: "About Us", path: "/about-bluestone", icon: FaInfoCircle },
    { name: "Corporate Daycare", path: "/daycare", icon: FaBuilding },
    { name: "Summer Club", path: "/summer-club", icon: FaSun },
    { name: "Parents Talk", path: "/parents-talk", icon: FaUsers },
    { name: "Partners with Us", path: "/partners", icon: FaHandshake },
    { name: "Media", path: "/media", icon: FaNewspaper },
    { name: "Contact Us", path: "/contact", icon: FaPhoneAlt },
  ];

  const mobilePrimaryMenu = [
    { name: "Home", path: "/", icon: FaHome },
    { name: "Programs", type: "programs", path: "/programs", icon: FaGraduationCap },
    { name: "Franchise", path: "/franchise", icon: FaJoint },
    { name: "Blogs", type: "blog-trigger", icon: FaBuilding }, // Added type for modal trigger
    { name: "Curriculum", path: "/curriculum", icon: FaBookOpen },
    { name: "Centres", path: "/centres", icon: FaIndustry },
  ];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (  
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <img src={logo} alt="Bluestone Preschool" className="h-40 w-40" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex md:flex-row-reverse md:text-sm lg:text-lg items-center gap-5">
            <div
              className="relative"
              onMouseEnter={() => setProgramOpen(true)}
              onMouseLeave={() => setProgramOpen(false)}
            >
              <span className="cursor-pointer font-semibold text-purple-900 hover:text-orange-400">
                PROGRAMS
              </span>
              <AnimatePresence>
                {programOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="absolute left-0 top-full mt-4 w-56 rounded-2xl bg-white shadow-xl overflow-hidden"
                  >
                    {programs.map((item, i) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-6 py-3 text-purple-900 hover:bg-orange-50 hover:text-orange-500 transition"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {menuItems.map((item) => {
              // Check if the item is BLOGS to trigger modal instead of Link
              if (item === "BLOGS") {
                return (
                  <button
                    key={item}
                    onClick={onBlogClick}
                    className="font-semibold text-purple-900 hover:text-orange-400 transition uppercase"
                  >
                    {item}
                  </button>
                );
              }
              return (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="font-semibold text-purple-900 hover:text-orange-400 transition"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link to="/admissions" className="px-5 py-2 border-2 border-orange-400 text-orange-500 font-bold rounded-full hover:bg-orange-400 hover:text-white transition">
              ADMISSION
            </Link>
          </div>

          <button onClick={() => setMenuOpen(true)} className="text-3xl text-purple-900 bg-amber-500 rounded-full px-4 py-3">
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 z-50 h-full lg:w-[22%] md:w-[28%] w-[75%] bg-white shadow-2xl rounded-l-3xl"
            >
              <div className="flex items-center justify-between px-6">
                <img src={logo} alt="Bluestone" className="h-20" />
                <button onClick={() => setMenuOpen(false)} className="text-2xl text-purple-900">✕</button>
              </div>

              <div className="px-6 py-0">
                <div className="my-4 border-t border-gray-200" />
                <div className="md:hidden flex flex-col gap-2 text-[14px] font-bold text-purple-900">
                  {mobilePrimaryMenu.map((item) => {
                    const Icon = item.icon;
                    
                    // Handle Programs Dropdown
                    if (item.type === "programs") {
                      return (
                        <div key={item.name}>
                          <button onClick={() => setMobileProgramOpen(!mobileProgramOpen)} className="flex items-center justify-between w-full hover:text-orange-500 transition">
                            <span className="flex items-center gap-4"><Icon className="text-orange-400" /> PROGRAMS</span>
                            <span>{mobileProgramOpen ? "−" : "+"}</span>
                          </button>
                          <AnimatePresence>
                            {mobileProgramOpen && (
                              <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="ml-8 mt-3 flex flex-col gap-1 overflow-hidden">
                                {programs.map((p) => (
                                  <Link key={p.name} to={p.path} onClick={() => setMenuOpen(false)} className="hover:text-orange-500 py-1">{p.name}</Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    // Handle Blog Modal Trigger
                    if (item.type === "blog-trigger") {
                      return (
                        <button
                          key={item.name}
                          onClick={() => {
                            setMenuOpen(false);
                            onBlogClick();
                          }}
                          className="flex items-center gap-4 hover:text-orange-500 transition text-left"
                        >
                          <Icon className="text-orange-400" />
                          {item.name.toUpperCase()}
                        </button>
                      );
                    }

                    return (
                      <Link key={item.name} to={item.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 hover:text-orange-500">
                        <Icon className="text-orange-400" />
                        {item.name.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-2 text-[16px] mt-4 font-bold text-purple-900 border-t pt-4">
                  {mobileMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.name} to={item.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 hover:text-orange-500">
                        <Icon className="text-orange-400 text-lg" />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                <Link to="/admissions" onClick={() => setMenuOpen(false)} className="mt-6 block text-center px-4 py-3 rounded-full border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition">
                  ENROLL NOW
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}