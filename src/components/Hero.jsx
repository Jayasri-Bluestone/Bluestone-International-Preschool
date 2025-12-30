import { motion } from "framer-motion";
import heroImg from "../assets/Hero.jpeg";
import girlImg from "../assets/girls.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-[85vh] w-full px-2 py-5 overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="Kids Learning"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* GRADIENT OVERLAY */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r 
                   from-orange-400/90 via-pink-500/80 to-purple-600/90"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full grid md:grid-cols-2 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
          className="text-white max-w-2xl"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 text-lg mt-5 mb-2 font-baloo"
          >
            🧸 Where Little Minds Grow
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-4xl md:text-5xl font-extrabold font-baloo leading-tight"
          >
            Inspiring Young Minds Every Day
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-lg text-white/90 font-baloo"
          >
            Play-based learning with care, creativity, and confidence
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/admissions")}
            className="mt-8 px-10 py-3 rounded-full border-2 border-white
                       font-semibold hover:bg-white hover:text-[#6F1880]
                       transition shadow-lg"
          >
            ENROLL NOW
          </motion.button>
        </motion.div>

        {/* RIGHT GIRL IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:flex justify-center items-end h-full"
        >
          {/* Glow Effect */}
          <div className="absolute bottom-20 w-80 h-80 bg-white/20 blur-3xl rounded-full" />

          <img
            src={girlImg}
            alt="Happy Preschool Girl"
            className="relative h-[600px] drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
