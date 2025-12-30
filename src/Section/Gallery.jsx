import { motion } from "framer-motion";

import img1 from "../assets/gallery1.jpeg";
import img2 from "../assets/gallery2.jpeg";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/teacher.jpeg";
import img5 from "../assets/gallery5.jpeg";
import img6 from "../assets/gallery6.jpeg";

export default function Gallery() {

  return (
    <section className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 text-2xl font-semibold mb-4 mt-14">
            Our Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Moments of Learning & Joy
          </h2>
        </motion.div>

        {/* Mobile Sticky Stack */}
        <div className="md:hidden space-y-24">
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
              className="sticky top-24 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[50vh] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Desktop / Tablet Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            hidden md:grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            auto-rows-[240px]
          "
        >
          {[img1, img2, img3, img4, img5, img6].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className={`
                rounded-3xl overflow-hidden
                ${i === 1 || i === 3 ? "md:col-span-2" : "md:col-span-1"}
              `}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
