import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import playgroupImg from "../assets/playgroup.jpeg";
import nurseryImg from "../assets/nursery.jpeg";
import lkgImg from "../assets/lkg.jpeg";
import ukgImg from "../assets/ukg.jpeg";

export default function Programs() {
  const programs = [
    {
      title: "NESTLERS",
      desc: "A gentle, play-based program for young toddlers.",
      age: "2 – 3 Years",
      time: "9:00 - 12:00",
      img: playgroupImg,
      arrowColor: "bg-yellow-400",
    },
    {
      title: "BAMBINO",
      desc: "Hands-on activities that spark curiosity and creativity.",
      age: "3 – 4 Years",
      time: "9:00 - 12:00",
      img: nurseryImg,
      arrowColor: "bg-sky-400",
    },
    {
      title: "B JUNIOR",
      desc: "Structured learning with fun problem-solving activities.",
      age: "4 – 5 Years",
      time: "9:00 - 3:00",
      img: lkgImg,
      arrowColor: "bg-red-500",
    },
    {
      title: "B SENIOR",
      desc: "Confidence-building learning for school readiness.",
      age: "5 – 6 Years",
      time: "9:00 - 3:00",
      img: ukgImg,
      arrowColor: "bg-green-500",
    },
  ];

  /* ---------------- RESPONSIVE CARD COUNT ---------------- */
  const [cardsPerView, setCardsPerView] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) setCardsPerView(1);      // mobile
      else if (window.innerWidth < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3);                              // desktop
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(programs.length - cardsPerView, 0);

  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  const visibleCards = programs.slice(index, index + cardsPerView);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-orange-500 text-2xl font-semibold mb-3">
            Our Programs
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800">
            Learning by Age Group
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">

          {/* Prev Button */}
          <button
            onClick={prev}
            disabled={index === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full bg-purple-800 text-white text-2xl
                       flex items-center justify-center
                       disabled:opacity-30"
          >
            ‹
          </button>

          {/* Cards */}
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-8 px-14"
            style={{
              gridTemplateColumns: `repeat(${cardsPerView}, minmax(0, 1fr))`
            }}
          >
            {visibleCards.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg overflow-hidden
                           hover:shadow-2xl transition group"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 object-cover
                               group-hover:scale-110 transition duration-500"
                  />

                  <div
                    className={`absolute right-6 bottom-0 translate-y-1/2
                                w-12 h-12 rounded-full ${item.arrowColor}
                                flex items-center justify-center
                                text-white text-xl font-bold shadow-lg`}
                  >
                    →
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {item.desc}
                  </p>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>
                      Age: <span className="text-orange-500">{item.age}</span>
                    </span>
                    <span>
                      Time: <span className="text-orange-500">{item.time}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Next Button */}
          <button
            onClick={next}
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       w-12 h-12 rounded-full bg-purple-800 text-white text-2xl
                       flex items-center justify-center
                       disabled:opacity-30"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}
