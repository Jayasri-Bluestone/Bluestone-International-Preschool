import { motion } from "framer-motion";
import heroImg from "../assets/Hero.jpeg"; // children image

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        src={heroImg}
        alt="Kids Learning"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-r from-orange-400/90 via-pink-500/80 to-purple-600/90"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
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
          className="max-w-2xl text-white"
        >
          
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex font-baloo items-center gap-2 text-lg mb-4"
          >
            🧸 Where Little Minds Grow
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="text-5xl md:text-6xl font-baloo font-extrabold leading-tight"
          >
            Inspiring Young Minds <br /> Every Day
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 text-lg font-baloo text-white/90"
          >
            Play-based learning with care, creativity, and confidence
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 px-8 py-3 rounded-full border-2 border-white
                       font-semibold hover:bg-white hover:text-[#6F1880]
                       transition"
          >
            KNOW MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
