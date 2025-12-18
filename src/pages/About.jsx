import { motion } from "framer-motion";
import {
  Palette,
  Puzzle,
  Users,
  BookOpen,
} from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#FFF7EC] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-orange-500 text-2xl font-semibold mb-4"
        >
          About Bluestone
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-4.5xl font-extrabold text-purple-800 leading-tight"
        >
          Nurturing <span className="text-orange-500">Curious Minds</span> For a <br />
          Brighter Tomorrow
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-5xl mx-auto text-gray-600 text-lg leading-tight"
        >
          At Bluestone International Preschool, we believe early childhood is the
          foundation of lifelong learning. Our approach blends play, creativity,
          and structured learning to help children grow academically, socially,
          and emotionally in a safe and nurturing environment.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 text-left"
        >
          {[{
            icon: Palette,
            title: "Creative Arts & Expression",
            text: "Drawing, music, storytelling, and crafts that help children express emotions and imagination.",
          },{
            icon: Puzzle,
            title: "Puzzle & Problem-Solving Play",
            text: "Age-appropriate games and puzzles that develop thinking, focus, and motor skills.",
          },{
            icon: Users,
            title: "Fun Group Activities",
            text: "Interactive games that promote teamwork, communication, and social bonding.",
          },{
            icon: BookOpen,
            title: "Early Literacy & Numbers",
            text: "Gentle introduction to letters, sounds, and numbers through fun, engaging methods.",
          }].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex gap-4 items-start"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 rounded-full bg-yellow-200 flex items-center justify-center"
                >
                  <Icon className="text-orange-500" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-900">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-gray-600 leading-tight">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full border-2 border-orange-500
              text-orange-500 font-semibold
              hover:bg-orange-500 hover:text-white
              transition"
          >
            Learn More
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
