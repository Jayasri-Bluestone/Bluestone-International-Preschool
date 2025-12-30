import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import GradientImageCard from "../styles/GradientImageCard";

import playImg from "../assets/playImg.jpeg";
import teacherImg from "../assets/teacher.jpeg";
import safeImg from "../assets/safeImg.jpeg";
import growthImg from "../assets/growthImg.jpeg";

export default function WhyChooseBluestone() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 justify-center text-center grid md:grid-cols-2 md:text-left gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-orange-500 font-semibold text-2xl mb-4">
            Why Choose Bluestone
          </p>

          <h2 className="text-4xl md:text-4xl font-extrabold text-purple-800">
            Meeting Every Child <br />
            <span className="text-orange-500">Where They Are</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
            Every child learns differently. At Bluestone, we nurture emotional,
            social, and academic growth through joyful, play-based experiences
            designed to build confidence, curiosity, and independence.
          </p>

          {/* ✅ BUTTON ROUTING */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/schedule-visit")}
            className="mt-8 px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition"
          >
            Schedule a Visit
          </motion.button>
        </motion.div>

        {/* RIGHT GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid text-center grid-cols-2 grid-rows-2 w-full max-w-[520px] mx-auto gap-0"
        >
          {[{
            title: "Play based learning",
            description: "Hands-on activities that encourage curiosity, creativity, and problem-solving.",
            image: playImg,
            frontColor: "rgba(180,128,15,0.88)",
            gradientFrom: "rgba(255,200,160,0.45)",
            gradientTo: "rgba(255,170,200,0.45)",
            radius: "rounded-tl-[36px] rounded-tr-[36px]",
          },
          {
            title: "Caring Teachers",
            description: "Experienced educators who nurture confidence, kindness, and independence.",
            image: teacherImg,
            frontColor: "rgba(15,118,110,0.95)",
            gradientFrom: "rgba(180,230,225,0.45)",
            gradientTo: "rgba(190,210,255,0.45)",
            radius: "rounded-tl-[36px] rounded-tr-[36px]",
          },
          {
            title: "Safe Environment",
            description: "A secure, child-friendly space where children feel happy, protected, and supported.",
            image: safeImg,
            frontColor: "rgba(175,75,38,0.88)",
            gradientFrom: "rgba(255,210,170,0.45)",
            gradientTo: "rgba(255,180,190,0.45)",
            radius: "rounded-bl-[36px] rounded-br-[36px]",
          },
          {
            title: "Holistic Growth",
            description: "Balanced focus on academics, social skills, emotional well-being, and creativity.",
            image: growthImg,
            frontColor: "rgba(30,27,75,0.90)",
            gradientFrom: "rgba(200,200,255,0.45)",
            gradientTo: "rgba(220,190,255,0.45)",
            radius: "rounded-bl-[36px] rounded-br-[36px]",
          }]
          .map((card, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <GradientImageCard {...card} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
