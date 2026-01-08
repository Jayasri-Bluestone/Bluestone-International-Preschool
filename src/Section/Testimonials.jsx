import { motion } from "framer-motion";
import TestimonialCard from "../styles/TestimonialCards";

const testimonials = [
  {
    name: "Stephen Miller",
    role: "Parent of Bambino Program",
    image: "https://i.pravatar.cc/100?img=11",
    text:
      "My child looks forward to school every single day, which itself says a lot. The teachers are warm, patient, and genuinely caring.",
    bg: "#FFE3D3",
  },
  {
    name: "Anitha R",
    role: "Parent of B Junior",
    image: "https://i.pravatar.cc/100?img=47",
    text:
      "Bluestone offers the perfect balance between learning and play. The activities are well planned and engaging.",
    bg: "#D6EEFF",
  },
  {
    name: "Priya M",
    role: "Parent of B Senior Student",
    image: "https://i.pravatar.cc/100?img=32",
    text:
      "We love how the school focuses on creativity and overall development, not just academics.",
    bg: "#DFF3C2",
  },
];

export default function Testimonials() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-orange-500 text-2xl font-semibold mb-2"
        >
          What Parents Say
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold text-purple-800"
        >
          Trusted by <span className="text-orange-500">Parents</span>, Loved
          <br className="hidden md:block" /> by{" "}
          <span className="text-orange-500">Children</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="max-w-4xl mx-auto mt-4 text-[18px] text-gray-600"
        >
         At Bluestone International Preschool, we believe early childhood is the foundation of lifelong learning. 
         Our approach blends play, creativity, and structured learning to help children grow academically, socially, 
         and emotionally in a safe and nurturing environment.
        </motion.p>

        {/* SCROLLER */}
        <div className="relative mt-16 overflow-hidden">

          {/* LEFT FOG */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white to-transparent" />

          {/* RIGHT FOG */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white to-transparent" />

          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="testimonial-item"
              >
                <TestimonialCard testimonial={item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        .testimonial-track {
          display: flex;
          gap: 2rem;
          width: max-content;
          animation: scroll-right 25s linear infinite;
        }

        .testimonial-track:hover {
          animation-play-state: paused;
        }

        .testimonial-item {
          flex-shrink: 0;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @media (max-width: 768px) {
          .testimonial-track {
            animation-duration: 35s;
          }
        }
      `}</style>
    </motion.section>
  );
}
