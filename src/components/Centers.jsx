import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaMailBulk } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* -------- IMAGES -------- */
import center1 from "../assets/playImg.jpeg";
import center2 from "../assets/scl.jpg";
import center3 from "../assets/teacher.jpeg";
import center4 from "../assets/prescl.jpg";

export default function Centers() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF7F2] overflow-hidden">
      {/* ================= HERO ================= */}
      {/* Changed: min-h-screen for better mobile filling, items-center for centering content */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <motion.img
          src={center4}
          alt="International Preschool Curriculum"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full max-w-4xl text-center"
        >
          {/* Responsive Font Sizes: text-2xl to text-5xl */}
          <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-2 uppercase tracking-wide">
            Our Flagship Center
          </h2>
          <h1 className="text-orange-500 text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
            Salem
          </h1>

          <p className="text-white/90 text-base md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Where joyful learning begins in a safe, nurturing, internationally
            inspired preschool environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <motion.button
            whileHover={{ scale: 1.04 }}
              onClick={() =>
                document.getElementById("salem-center")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-transparent border border-white text-orange-400 font-bold shadow-lg hover:bg-purple-100 transition"
            >
              Explore Learning Journey
            </motion.button>

             <motion.button
            whileHover={{ scale: 1.04 }}
              onClick={() => navigate("/admissions")}
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg hover:bg-white hover:text-orange-400 transition"
            >
              Apply for Admission
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ================= SALEM DETAILS ================= */}
      <section id="salem-center" className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Animated background blobs - Hidden on very small screens to improve performance */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="hidden md:block absolute top-10 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10"
        />

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-purple-900">
            Salem Center
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Our first home — thoughtfully designed for joyful early learning.
          </p>
        </div>

        {/* Info + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Info Card */}
          <div className="bg-orange-500 rounded-[2.5rem] shadow-2xl p-6 sm:p-10 space-y-8 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl text-white">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Address</h4>
                <p className="text-white text-sm sm:text-base font-medium">
                  No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK, <br />
                  Salem, Tamil Nadu – 637102.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl text-white">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Phone</h4>
                <a href="tel:+916383990668" className="text-white text-lg sm:text-xl font-bold hover:underline">
                  +91 63839 90668
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl text-white">
                <FaMailBulk size={20} />
              </div>
              <div className="min-w-0"> {/* Prevents text overflow */}
                <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Email</h4>
                <a href="mailto:info@bluestoneinternationalpreschool.com" className="text-white text-sm sm:text-base font-medium break-all hover:underline">
                  info@bluestoneinternationalpreschool.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/20 rounded-2xl text-white">
                <FaClock size={20} />
              </div>
              <div>
                <h4 className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Hours</h4>
                <p className="text-white text-sm sm:text-base font-medium">Mon – Fri : 9:00 AM – 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[350px] lg:h-full border-8 border-white">
            <iframe
              title="Salem Center Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.484439169622!2d77.8306015!3d11.5832731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzAwLjAiTiA3N8KwNDknNTAuMiJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              className="w-full h-full hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= IMAGE GALLERY ================= */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-extrabold text-purple-900 text-center mb-10">
            A Day at Our Salem Center
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[center1, center2, center3, center4].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-3xl shadow-lg"
              >
                <img src={img} alt="Salem Center" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WHY PARENTS LOVE US ================= */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-extrabold text-purple-900 text-center mb-12">
            Why Salem Parents Love Us
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "International Curriculum",
              "Caring Educators",
              "Safe Child-Friendly Campus",
              "Holistic Development",
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-6 shadow-sm border border-purple-100 text-center flex items-center justify-center font-bold text-purple-900 text-sm md:text-base"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= GROWING SOON ================= */}
        <div className="text-center bg-gradient-to-br from-purple-900 to-orange-500 rounded-[3rem] p-8 sm:p-16 shadow-2xl relative overflow-hidden">
          {/* Decorative Circle */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              Growing With Love 🌱
            </h3>
            <p className="text-purple-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Salem is our beginning. More centers will open soon as we grow — always with the same care,
              quality, and commitment to children.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/admissions")}
              className="mt-10 px-10 py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-xl"
            >
              Apply for Admission
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}