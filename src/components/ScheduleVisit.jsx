import { motion } from "framer-motion";
import { FaCalendarCheck, FaChild, FaSchool } from "react-icons/fa";

export default function ScheduleVisit() {
  return (
    <section className="bg-[#FFF7ED] min-h-screen">

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#74207E] to-purple-900">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center text-white">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-orange-400 font-semibold mb-3">
              Visit Our Campus
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Schedule a <span className="text-orange-400">School Visit</span>
            </h1>

            <p className="mt-6 text-white/90 max-w-lg">
              Experience our joyful learning environment, meet our educators,
              and see how Bluestone nurtures young minds.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="flex items-center gap-2">
                <FaChild className="text-orange-400" />
                <span>Safe & Caring</span>
              </div>
              <div className="flex items-center gap-2">
                <FaSchool className="text-orange-400" />
                <span>Global Curriculum</span>
              </div>
            </div>
          </motion.div>

          {/* IMAGE COLLAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="Preschool classroom"
              className="rounded-3xl object-cover h-48 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Kids learning"
              className="rounded-3xl object-cover h-48 w-full mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30"
              alt="Play based learning"
              className="rounded-3xl object-cover h-48 w-full col-span-2"
            />
          </motion.div>
        </div>
      </div>

      {/* BENEFITS */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: <FaCalendarCheck />,
            title: "Easy Scheduling",
            desc: "Book your visit instantly with our live calendar.",
          },
          {
            icon: <FaChild />,
            title: "Child-Friendly Campus",
            desc: "Designed for safety, creativity, and exploration.",
          },
          {
            icon: <FaSchool />,
            title: "Meet Our Educators",
            desc: "Interact with trained teachers and staff.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white p-8 rounded-3xl shadow-lg"
          >
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="font-bold text-lg text-[#1F2B6C] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CAL.COM EMBED */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="bg-orange-400 text-white p-6 text-center">
            <h2 className="text-2xl font-bold">
              Book Your Visit
            </h2>
            <p className="text-white/90 mt-1">
              Select a date & time that works best for you
            </p>
          </div>

          {/* Cal.com iframe */}
          <div className="h-[750px]">
            <iframe
              src="https://cal.com/bluestone-igcmyt/pre-school"       
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a Visit"
              className="rounded-b-3xl"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
