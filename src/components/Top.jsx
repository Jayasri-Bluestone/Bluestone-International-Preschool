import { Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-purple-800 text-white text-xs sm:text-sm"
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          py-2
          flex flex-col
          sm:flex-row
          sm:justify-between
          sm:items-center
          gap-2 sm:gap-0
        "
      >

        {/* LEFT */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Phone size={14} className="sm:size-[16px]" />
            <span>+91 8489294776</span>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2"
          >
            <Clock size={14} className="sm:size-[16px]" />
            <span className="text-[#D08407]">Opening:</span>
            <span>9:30am – 3:30pm</span>
          </motion.div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center sm:justify-end items-center gap-3">
          <span className="hidden sm:block">Follow us:</span>

          {["f", "in", "▶"].map((icon, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 h-6 flex items-center justify-center bg-white text-purple-700 rounded-full font-bold text-xs cursor-pointer shadow"
            >
              {icon}
            </motion.span>
          ))}
        </div>

      </div>
    </motion.div>
  );
}
