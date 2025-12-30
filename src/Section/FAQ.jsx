import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What age groups do you accept at Bluestone Preschool?",
    answer:
      "We accept children from 1.5 years to 6 years across our structured preschool programs.",
  },
  {
    question: "Is the campus safe for young children?",
    answer:
      "Yes. Our campuses are designed with child safety in mind, including CCTV surveillance, trained staff, and secure access control.",
  },
   {
    question: "Does joining a pre-school help?",
    answer:
      "Playschool is not compulsory but it helps children immensely with the transition to Kindergarten. Pre-school prepares children for a lifetime of learning. It helps children gain skills that help them learn to read, write, and build math and science skills with holistic brain development to make them school ready. It works towards holistic development mind-body and soul-develops cognitive, psychomotor, and affective domain",
  },
  {
    question: "What if my child is not ready for pre-school?",
    answer:
      "There is no checklist of must-have skills in children for pre-school. As the growth parameters for each child are different, at EuroKids we understand this and follow a Child First ideology.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "We follow a play-based, child-centric curriculum aligned with early childhood development standards.",
  },
  {
    question: "How do you communicate with parents?",
    answer:
      "We maintain regular communication through meetings, mobile apps, progress reports, and parent-teacher interactions.",
  },
   {
    question: "What age groups do you accept at Bluestone Preschool?",
    answer:
      "We accept children from 1.5 years to 6 years across our structured preschool programs.",
  },
  {
    question: "Is the campus safe for young children?",
    answer:
      "Yes. Our campuses are designed with child safety in mind, including CCTV surveillance, trained staff, and secure access control.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FFF7ED] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center lg:text-left">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-orange-500 text-2xl font-semibold mb-3">
            Need Help?
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#1F2B6C]">
            Frequently Asked{" "}
            <span className="text-orange-500">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-[#1F2B6C] font-semibold text-lg">
                  {faq.question}
                </span>

                <span className="w-5 h-5 flex items-center text-sm justify-center rounded-md bg-orange-500 text-white">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 text-left leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
