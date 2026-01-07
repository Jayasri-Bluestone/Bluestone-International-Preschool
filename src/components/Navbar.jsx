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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);

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
  { name: "Summer Club", path: "/club", icon: FaSun },
  { name: "Parents Talk", path: "/parents", icon: FaUsers },
  { name: "Partners with Us", path: "/partners", icon: FaHandshake },
  { name: "Media", path: "/media", icon: FaNewspaper },
  { name: "Contact Us", path: "/contact", icon: FaPhoneAlt },
];

const mobilePrimaryMenu = [
   { name: "Home", path: "/", icon: FaHome },
  { name: "Programs", type: "programs",path:"/programs", icon: FaGraduationCap },
  { name: "Franchise", path: "/franchise", icon: FaJoint },
  { name: "Blogs", path: "/blogs" , icon: FaBuilding},
  { name: "Curriculum", path: "/curriculum", icon: FaBookOpen },
  { name: "Centres", path: "/centres", icon: FaIndustry},
];

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} alt="Bluestone Preschool" className="h-40 w-40" />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          <nav className="hidden md:flex md:flex-row-reverse md:text-sm  lg:text-lg items-center gap-5">

            {/* PROGRAMS DROPDOWN */}
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
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute left-0 top-full mt-4 w-56 rounded-2xl bg-white shadow-xl overflow-hidden"
                  >
                    {programs.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <Link
                          to={item.path}
                          className="block px-6 py-3 text-purple-900 hover:bg-orange-50 hover:text-orange-500 transition"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* OTHER LINKS */}
            {menuItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-semibold text-purple-900 hover:text-orange-400 transition"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* DESKTOP ADMISSION */}
          <div className="hidden md:block">
            <Link
              to="/admissions"
              className="px-5 py-2 md:text-sm md:px-2 lg:text-lg lg:px-5 rounded-full  border-2 border-orange-400 text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition"
            >
              ADMISSION
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(true)}
            className="text-3xl md:text-sm lg:text-3xl text-purple-900 bg-amber-500 rounded-full px-4 py-3 "
          >
            ☰
          </button>
        </div>
      </div>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
          <motion.div
  initial={{ opacity: 0, x: "80%" }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: "80%" }}
  transition={{ duration: 0.75, ease: "easeInOut" }}
  onClick={() => setMenuOpen(false)}
  className="fixed inset-0 z-40 bg-black/70 backdrop-sm"
/>
   
          {/* DRAWER */}
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
 className="
  fixed top-0 right-0 z-50 h-full
  lg:w-[22%] md:w-[28%] sm:w-[35%] 
  bg-white shadow-2xl rounded-l-3xl
"
>
  {/* HEADER */}
  <div className="flex items-center justify-between px-6">
    <img src={logo} alt="Bluestone" className="h-20" />
    <button
      onClick={() => setMenuOpen(false)}
      className="text-2xl text-purple-900"
    >
      ✕
    </button>
  </div>

  {/* MENU LIST */}
<div className="px-6 sm:px-7 py-0">
 <div className="my-4 border-t border-gray-200" />

{/* ================= PRIMARY MENU (MOBILE ONLY) ================= */}

<div className="md:hidden flex flex-col gap-2 text-[14px] font-bold text-purple-900">

    {mobilePrimaryMenu.map((item) => {
      const Icon = item.icon;

      // PROGRAMS ACCORDION
      if (item.type === "programs") {
        return (
          <div key={item.name}>
            <button
              onClick={() => setMobileProgramOpen(!mobileProgramOpen)}
              className="flex items-center justify-between w-full  hover:text-orange-500 transition"
            >
              <span className="flex items-center gap-4">
                <Icon className="text-orange-400" />
                PROGRAMS
              </span>
              <span>{mobileProgramOpen ? "−" : "+"}</span>
            </button>

            
            <AnimatePresence>
              {mobileProgramOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="ml-8 mt-3 flex flex-col gap-1 text-[16px] font-semibold"
                >
                  {programs.map((p) => (
                    <Link
                      key={p.name}
                      to={p.path}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-orange-500"
                    >
                      {p.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }

      // NORMAL PRIMARY LINKS
      return (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-4 hover:text-orange-500"
                      >
                        <Icon className="text-orange-400" />
                        {item.name.toUpperCase()}
                      </Link>
                    );
                  })}
                </div>



  {/* ================= SECONDARY MENU ================= */}
  <div className="flex flex-col gap-2 text-[16px] mt-2 font-bold text-purple-900">
    {mobileMenu.map((item, i) => {
      const Icon = item.icon;
      return (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-4 hover:text-orange-500 transition"
        >
          <Icon className="text-orange-400 text-lg" />
          {item.name}
        </Link>
      );
    })}
  </div>

  {/* CTA */}
  <Link
    to="/admissions"
    onClick={() => setMenuOpen(false)}
    className="mt-3 block text-center px-4 py-3 rounded-full border-2 border-orange-400
               text-orange-500 font-bold hover:bg-orange-400 hover:text-white transition"
  >
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
