import { motion } from "framer-motion";
import mdImg from "../assets/MD.png";
import school1 from "../assets/prescl.jpg";
import school2 from "../assets/class.jpg";
import school3 from "../assets/draw.jpg";
import school from "../assets/Sclenv.jpg";

export default function AboutBluestone() {
  return (
    <main className="bg-white overflow-hidden">

     {/* ================= HERO ================= */}
<section className="relative min-h-[85vh] flex items-start justify-center overflow-hidden pt-24 md:pt-38 px-4 sm:px-6 lg:px-8">

  {/* BACKGROUND IMAGE */}
  <div
    className="absolute inset-0 bg-cover bg-center  scale-110"
    style={{
      backgroundImage: `url(${school})`,
    }}
  />

  {/* GRADIENT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-br 
    from-purple-900/90 
    via-purple-700/80 
    to-orange-500/70" />

  {/* SOFT LIGHT EFFECT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_60%)]" />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 max-w-6xl mx-auto px-6 text-center"
  >
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg"
    >
      About Bluestone <br />
      <span className="text-orange-400">
        International Preschool
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white/90"
    >
      A nurturing space where curiosity blooms, confidence grows,
      and joyful learning begins.
    </motion.p>
  </motion.div>
</section>


      {/* ================= WHO WE ARE ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
              Who We Are
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Bluestone International Preschool is built on the belief that
              early childhood is the most powerful phase of learning.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Through play-based education, emotional nurturing, and
              strong foundational skills, we prepare children not just
              for school — but for life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-400/20 rounded-3xl blur-2xl" />
            <img
              src={school1}
              alt="Bluestone Campus"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= MD MESSAGE ================= */}
      <section className="py-28 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-[1fr_2fr] gap-20 items-center">

          <motion.img
            src={mdImg}
            alt="Managing Director"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl shadow-2xl h-100 object-cover"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange-500 font-semibold text-lg mb-2">
              From the Managing Director
            </p>

            <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
              Mrs. Kumaresan Thangavel
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Mr. Kumaresan Thangavel is a dynamic visionary and transformative leader, 
              dedicated to shaping the future of young minds and propelling them toward prosperity and success. 
              With over a decade of impactful leadership at Bluestone Overseas Consultants, he has been the driving
               force guiding countless students to realize their global education and career aspirations with integrity, 
               excellence, and personalized care. He continues to ignite change and build futures, blending the best of 
               education, inspiration, and human values.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on emotional intelligence, creativity, confidence,
              and strong values — nurturing children for a beautiful future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-8">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-purple-800 text-center mb-20"
          >
            Our Learning Environment
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[school, school3, school2].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="overflow-hidden rounded-3xl shadow-xl"
              >
                <img
                  src={img}
                  alt="Bluestone Preschool"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="text-center w-5xl bg-gradient-to-r from-purple-800 to-orange-500 rounded-3xl p-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold mb-16"
          >
            Visit & Connect With Us
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 text-white/90">

            {[
              { title: "📞 Phone", text: "+91 63839 90668" },
              { title: "✉ Email", text: "info@bluestonepreschool.com" },
               { title: "📍 Address", text: "No. 9/179/1, Vettukadu, Erumaipatti PO, Idappadi TK, Tamil Nadu – 637102" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://www.google.com/maps/search/No.+9%2F179%2F1,+Vettukadu"
            target="_blank"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-16 px-10 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            View Location on Map
          </motion.a>

        </div>
      </section>

    </main>
  );
}
