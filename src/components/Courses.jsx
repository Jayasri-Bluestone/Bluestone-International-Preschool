import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaintBrush,
  FaMusic,
  FaBookOpen,
  FaBrain,
  FaRunning,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ---------- HERO IMAGE ---------- */
import sclImg from "../assets/Sclenv.jpg";

/* ---------- SYLLABUS IMAGES ---------- */
import sensoryImg from "../assets/syllabus/sensory.webp";
import musicImg from "../assets/syllabus/music.jpg";
import motorImg from "../assets/syllabus/motor.jpg";
import storyImg from "../assets/syllabus/story.jpg";
import artImg from "../assets/syllabus/art.jpg";
import danceImg from "../assets/syllabus/dance.jpg";
import phonicsImg from "../assets/syllabus/phonics.jpg";
import mathImg from "../assets/syllabus/maths.jpg";
import creativeImg from "../assets/syllabus/creative.webp";
import thinkingImg from "../assets/syllabus/thinking.jpg";
import readingImg from "../assets/syllabus/math.webp";
import leadershipImg from "../assets/syllabus/leadership.jpg";

/* ---------- DATA ---------- */
const syllabusData = [
  {
    age: "2 – 3 Years (Nestlers)",
    color: "bg-red-500",
    items: [
      { icon: <FaPaintBrush />, title: "Sensory Play", desc: "Textures, colors & exploration", image: sensoryImg },
      { icon: <FaMusic />, title: "Music & Movement", desc: "Rhymes & rhythm activities", image: musicImg },
      { icon: <FaRunning />, title: "Motor Skills", desc: "Gross & fine motor development", image: motorImg },
    ],
  },
  {
    age: "3 – 4 Years (Bambino)",
    color: "bg-blue-500",
    items: [
      { icon: <FaBookOpen />, title: "Storytelling", desc: "Language & imagination", image: storyImg },
      { icon: <FaPaintBrush />, title: "Creative Arts", desc: "Drawing & craft activities", image: artImg },
      { icon: <FaMusic />, title: "Music & Dance", desc: "Expressive movement", image: danceImg },
    ],
  },
  {
    age: "4 – 5 Years (B Junior)",
    color: "bg-green-500",
    items: [
      { icon: <FaBookOpen />, title: "Phonics", desc: "Early reading skills", image: phonicsImg },
      { icon: <FaBrain />, title: "Numeracy", desc: "Numbers & logic", image: mathImg },
      { icon: <FaPaintBrush />, title: "Creative Expression", desc: "Role play & art", image: creativeImg },
    ],
  },
  {
    age: "5 – 6 Years (B Senior)",
    color: "bg-yellow-500",
    items: [
      { icon: <FaBrain />, title: "Critical Thinking", desc: "Problem solving", image: thinkingImg },
      { icon: <FaBookOpen />, title: "Reading & Writing", desc: "Sentence formation", image: readingImg },
      { icon: <FaRunning />, title: "Leadership Skills", desc: "Teamwork & confidence", image: leadershipImg },
    ],
  },
];

export default function Curriculum() {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF7F2]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden pt-24 md:pt-32 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <motion.img
          src={sclImg}
          alt="International Preschool Curriculum"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 sm:mb-4">
            Our International </h2>
             <h1 className="text-orange-500 text-5xl md:text-6xl font-extrabold mb-6 text-center">Curriculum</h1>
          

          <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            A globally inspired, play-based learning journey nurturing creativity, confidence, and lifelong skills.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
          <motion.button
            whileHover={{ scale: 1.04 }}
              onClick={() =>
                document.getElementById("courses")
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

      {/* ================= CONTENT ================= */}
      <section id="courses" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative">

        {/* Animated Background Shapes */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
            className="absolute bottom-20 right-8 sm:right-16 w-72 sm:w-96 h-72 sm:h-96 bg-orange-300/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-pink-300/20 rounded-full blur-3xl"
          />
        </div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800">
            Our Learning Journey
          </h2>
          <p className="mt-2 sm:mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            A step-by-step syllabus designed for joyful learning 🌈
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6 sm:space-y-8">
          {syllabusData.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 sm:p-6 md:p-8"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${stage.color} flex items-center justify-center text-white font-bold`}>
                    {index + 1}
                  </div>
                  <h3 className="text-sm sm:text-lg md:text-xl font-bold text-purple-800">
                    {stage.age}
                  </h3>
                </div>
                <span className="text-2xl sm:text-3xl text-purple-800">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 sm:px-6 md:px-10 pb-6 sm:pb-10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 sm:gap-6">
                      {stage.items.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ y: -4 }}
                          className="bg-[#FAF7F2] rounded-2xl overflow-hidden shadow-sm"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-40 sm:h-48 md:h-48 object-cover"
                          />

                          <div className="p-4 sm:p-5 text-center">
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full ${stage.color} flex items-center justify-center text-white text-lg sm:text-xl`}>
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-purple-800 text-sm sm:text-base">
                              {item.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BOTTOM SECTION ================= */}
 <section className="py-20 bg-[#FAF7F2]">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <div className="relative bg-gradient-to-r from-purple-800 to-orange-500 text-white rounded-[2.5rem] py-16 sm:py-20 px-6 sm:px-10 overflow-hidden shadow-2xl">

      {/* Decorative Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute -top-16 -left-16 w-48 h-48 bg-pink-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="relative text-center z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
        >
          Unlock Your Child’s Full Potential
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base md:text-lg mb-8 sm:mb-12 text-white/90"
        >
          Our internationally inspired curriculum nurtures curiosity, creativity, and confidence.
          From hands-on learning to early leadership skills, your child will thrive in a joyful,
          playful, and supportive environment.
        </motion.p>

        <div className="flex justify-center">
          <button
            onClick={() => navigate("/admissions")}
            className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold bg-white text-purple-800 shadow-lg hover:scale-105 transition text-sm sm:text-base"
          >
            Apply Now & Join the Journey
          </button>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 text-white/80 italic text-sm sm:text-base"
        >
          “The best investment in a child’s future is the joy of learning today.”
        </motion.p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
