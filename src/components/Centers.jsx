import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaMailBulk} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* -------- IMAGES (replace with real ones later) -------- */
import center1 from "../assets/playImg.jpeg";
import center2 from "../assets/scl.jpg";
import center3 from "../assets/teacher.jpeg";
import center4 from "../assets/prescl.jpg";

export default function Centers() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF7F2] overflow-hidden">

      {/* ================= HERO ================= */}
            <section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
              {/* Background Image */}
              <motion.img
                src={center4}
                alt="International Preschool Curriculum"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80" />
       

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 px-6 max-w-4xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-2 text-center">
            Our Flagship Center  </h2>
            <h1 className="text-orange-500 text-5xl md:text-6xl font-extrabold mb-6 text-center">Salem</h1>
         

          <p className="text-white/90 text-lg mb-10">
            Where joyful learning begins in a safe, nurturing,
            internationally inspired preschool environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document.getElementById("salem-center")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-white text-purple-800 font-bold shadow-lg hover:bg-purple-100 transition"
            >
              Visit Salem Center
            </button>

            <button
              onClick={() => navigate("/admissions")}
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg hover:bg-orange-400 transition"
            >
              Apply for Admission
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= SALEM DETAILS ================= */}
      <section
        id="salem-center"
        className="relative max-w-6xl mx-auto px-6 py-24"
      >
        {/* Animated background blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="absolute top-10 left-10 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl -z-10"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 18 }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl -z-10"
        />

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Salem Center
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our first home — thoughtfully designed for joyful early learning.
          </p>
        </div>

        {/* Info + Map */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {/* Info */}
          <ul className="bg-orange-500 rounded-3xl shadow-lg p-8 space-y-6">
            <li className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-white text-xl mt-1" />
              <p className="text-white hover:text-black transition">
               No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK, <br />
                Salem, Tamil Nadu – 637102.
              </p>
            </li>

            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-white" />
              <p className="text-white hover:text-black transition cursor-pointer"
              a href="tel:+916383990668">+91 63839 90668</p>
            </li>

             <li className="flex items-center gap-4">
              <FaMailBulk className="text-white" />
              <p className="text-white hover:text-black transition cursor-pointer"
              a href="mailto:info@bluestonepreschool.com" target="_blank">info@bluestoneinternationalpreschool.com</p>
            </li>

            <li className="flex items-center gap-4">
              <FaClock className="text-white" />
              <p className="text-white hover:text-black transition">
                Mon – Fri : 9:00 AM – 4:00 PM
              </p>
            </li>
          </ul>

          {/* Google Map */}
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <iframe
              title="Salem Center Location"
              src="https://www.google.com/maps?q=No.%209/179/1,%20Vettukadu,%20Erumaipatti%20PO,%20Idappadi%20TK,%20Tamil%20Nadu%20637102&output=embed"
              className="w-full h-full min-h-[300px] border-4"
              loading="lazy"
            />
          </div>
        </div>

        {/* ================= IMAGE GALLERY ================= */}
        <div className="mb-24">
          <h3 className="text-3xl font-extrabold text-purple-800 text-center mb-10">
            A Day at Our Salem Center
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[center1, center2, center3, center4].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={img}
                  alt="Salem Center"
                  className="w-full h-56 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= WHY PARENTS LOVE US ================= */}
        <div className="mb-24">
          <h3 className="text-3xl font-extrabold text-purple-800 text-center mb-12">
            Why Salem Parents Love Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "International Curriculum",
              "Caring Educators",
              "Safe Child-Friendly Campus",
              "Holistic Development",
            ].map((text, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 shadow-md text-center font-semibold text-purple-800"
              >
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= GROWING SOON ================= */}
        <div className="text-center bg-gradient-to-r from-purple-800 to-orange-500 rounded-3xl p-12 shadow-inner">
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Growing With Love 🌱
          </h3>
          <p className="text-gray-700 text-white max-w-2xl mx-auto">
            Salem is our beginning.  
            More centers will open soon as we grow — always with the same care,
            quality, and commitment to children.
          </p>
          <button
              onClick={() => navigate("/admissions")}
              className="px-10 py-3 rounded-full bg-white mt-10 text-purple-800 font-bold text-lg hover:scale-105 transition"
            >
              Apply for Admission
            </button>
        </div>
      </section>
    </div>
  );
}
