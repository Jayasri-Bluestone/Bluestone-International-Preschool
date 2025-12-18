import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/BLUES.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "CONTACT", "PROGRAM", "GALLERY"];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
            <img
              src={logo}
              alt="Bluestone International Preschool"
              className="h-30 w-30"
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {menuItems.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="text-purple-900 font-semibold hover:text-orange-400 transition"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop Admission Button */}
          <div className="hidden md:block">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/admissions"
                className="px-6 py-2 rounded-full border-2 border-orange-400
                           text-orange-500 font-bold
                           hover:bg-orange-400 hover:text-white
                           transition duration-300"
              >
                ADMISSION
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-purple-900 text-3xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-purple-900 font-semibold hover:text-orange-400 transition"
                >
                  {item}
                </Link>
              ))}

              {/* Mobile Admission Button */}
              <Link
                to="/admissions"
                onClick={() => setMenuOpen(false)}
                className="mt-4 text-center px-6 py-2 rounded-full border-2 border-orange-400
                           text-orange-500 font-bold
                           hover:bg-orange-400 hover:text-white transition"
              >
                ADMISSION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
