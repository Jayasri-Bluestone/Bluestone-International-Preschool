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

    {/* ================= CONTACT - FULLY INTERACTIVE ================= */}
<section className="py-24 bg-white flex justify-center px-6">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-6xl bg-gradient-to-br from-purple-800 via-purple-700 to-orange-500 rounded-[3rem] p-8 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
  >
    {/* Decorative Background Circles */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

    <div className="relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-16"
      >
        Visit & Connect With Us
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 text-white">
        {[
          { 
            title: "📞 Phone", 
            text: "+91 63839 90668", 
            link: "tel:+916383990668" 
          },
          { 
            title: "✉ Email", 
            text: "info@bluestoneinternationalpreschool.com", 
            link: "mailto:info@bluestoneinternationalpreschool.com" 
          },
          { 
            title: "📍 Address", 
            text: "No. 9/179/1, Vettukadu, Idappadi TK, Tamil Nadu – 637102", 
           
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.title.includes("Address") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/30 transition-all duration-300 group cursor-pointer"
          >
            <h4 className="text-xl font-bold mb-3 text-orange-300 group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <p className="leading-relaxed text-[14px] text-purple-50 group-hover:underline">
              {item.text}
            </p>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.a
          href="https://www.google.com/maps/dir/?api=1&destination=11.5835,77.8488"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-16 px-10 py-3 rounded-full bg-white text-purple-800 font-bold text-lg shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          Get Driving Directions
        </motion.a>
      </motion.div>
    </div>
  </motion.div>
</section>

    </main>
  );
}
