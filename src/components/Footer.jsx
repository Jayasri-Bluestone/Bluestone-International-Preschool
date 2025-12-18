import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/BLUES.png";
import CloudLogo from "../styles/cloud";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <footer className="bg-[#74207E] text-white py-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-x-12 gap-y-12"
      >

        {/* Brand */}
        <motion.div variants={item}>
          <CloudLogo logo={logo} />
          <p className="text-white/90 text-lg leading-relaxed max-w-sm mt-4">
            Nurturing young minds through joyful learning,
            care, and creativity.
          </p>
        </motion.div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Menu */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-xl mb-6">Menu</h4>
            <ul className="space-y-4 text-white/80">
              <li><Link to="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
              <li><Link to="/program" className="hover:text-orange-400 transition">Program</Link></li>
              <li><Link to="/gallery" className="hover:text-orange-400 transition">Gallery</Link></li>
            </ul>
          </motion.div>

          {/* Follow */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-xl mb-6">Follow us</h4>
            <ul className="space-y-4 text-white/80">
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={item}>
            <h4 className="font-semibold text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li>
                <a
                  href="mailto:info@bluestonepreschool.com"
                  className="hover:text-orange-400 transition"
                >
                  info@bluestonepreschool.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+123456789"
                  className="hover:text-orange-400 transition"
                >
                  +123 456 789
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/No.+9%2F179%2F1,+Vettukadu,+Erumaipatti+PO,+Idappadi+TK,+Tamil+Nadu+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition"
                >
                  No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK, Tamil Nadu 637102.
                </a>
              </li>
            </ul>
          </motion.div>

        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-white/20" />

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-6 text-left text-sm text-white/80"
      >
        © 2024 Bluestone International Preschool. All rights reserved.
      </motion.div>
    </footer>
  );
}
