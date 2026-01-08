import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import {
  FaSchool,
  FaGlobe,
  FaHandsHelping,
  FaChartLine,
  FaUserGraduate,
  FaPhoneAlt,
  FaBookReader,
  FaChalkboardTeacher,
  FaBullhorn,
  FaCogs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaRupeeSign, FaClock } from "react-icons/fa";


/* Images */
import heroImg from "../assets/safeImg.jpeg";
import franchiseImg from "../assets/nursery.jpeg";
import franImg from "../assets/ukg.jpeg";


/* ================= MANUAL CAROUSEL ================= */
function ManualCarousel({ items }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "next" ? 340 : -340,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll("prev")}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white text-purple-800 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll("next")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white text-purple-800 p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaChevronRight />
      </button>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scrollbar-hide pb-6 scroll-smooth"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="min-w-[300px] sm:min-w-[320px] bg-white rounded-3xl p-10 shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{backgroundColor: item.color, color: 'white', fontSize: '1.8rem'}}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Franchise() {
  const navigate = useNavigate();

  const scrollToEnquiry = () => {
  document
    .getElementById("franchise-enquiry")
    ?.scrollIntoView({ behavior: "smooth" });
};


  const items = [
    {
      icon: <FaSchool />,
      title: "End-to-End School Setup",
      desc: "Site planning, interiors, safety norms, branding & launch.",
      color: "#8B5CF6",
    },
    {
      icon: <FaBookReader />,
      title: "International Curriculum",
      desc: "Play-based global curriculum & learning kits.",
      color: "#EC4899",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teacher Training",
      desc: "Recruitment, onboarding & continuous development.",
      color: "#F59E0B",
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing & Admissions",
      desc: "Launch campaigns, digital creatives & lead generation.",
      color: "#10B981",
    },
    {
      icon: <FaCogs />,
      title: "Operations & ERP",
      desc: "ERP, SOPs, fee management & parent communication.",
      color: "#3B82F6",
    },
    {
      icon: <FaHandsHelping />,
      title: "Lifetime Mentorship",
      desc: "Audits, performance reviews & expansion support.",
      color: "#EF4444",
    },
  ];

  const whyIcons = [
    { icon: <FaGlobe />, title: "Global Curriculum", color: "#3B82F6" },
    { icon: <FaSchool />, title: "School Setup", color: "#8B5CF6" },
    { icon: <FaHandsHelping />, title: "Mentorship", color: "#10B981" },
    { icon: <FaChartLine />, title: "Marketing Support", color: "#F59E0B" },
    { icon: <FaUserGraduate />, title: "Teacher Training", color: "#EC4899" },
    { icon: <FaPhoneAlt />, title: "24/7 Support", color: "#EF4444" },
  ];

 const roi = [
    {
      title: "Initial Investment",
      value: "₹15–25 Lakhs",
      icon: <FaRupeeSign />,
      color: "bg-gradient-to-tr from-purple-600 to-purple-400",
    },
    {
      title: "Breakeven Period",
      value: "18–24 Months",
      icon: <FaClock />,
      color: "bg-gradient-to-tr from-orange-200 to-yellow-300",
    },
    {
      title: "Annual ROI",
      value: "35–45%",
      icon: <FaChartLine />,
      color: "bg-gradient-to-tr from-green-400 to-teal-500",
    },
  ];
const processSteps = [
  {
    step: "Submit Enquiry",
    desc: "Share your basic details and interest in starting a preschool franchise."
  },
  {
    step: "Discussion & Location Review",
    desc: "Our experts evaluate your location, budget, and market potential."
  },
  {
    step: "Agreement & Onboarding",
    desc: "Sign the franchise agreement and get onboarded into our system."
  },
  {
    step: "School Setup & Training",
    desc: "Infrastructure setup, curriculum planning, and staff training begin."
  },
  {
    step: "Marketing & Admissions",
    desc: "Launch marketing campaigns and start student admissions with our support."
  },
  {
    step: "Grand Opening 🎉",
    desc: "Your preschool opens successfully with full operational support."
  }
];


  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <img src={heroImg} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
           <span className="text-orange-400"> Franchise </span>Opportunity
          </h1>
          <p className="text-white/90 text-lg mb-10">
            Build a future-ready international preschool with strong systems & support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
  onClick={scrollToEnquiry}
  className="px-8 py-3 rounded-full bg-white text-purple-800 font-bold"
>
  Apply for Franchise
</button>

            <button
              onClick={() => document.getElementById("why")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold"
            >
              Why Partner With Us
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= HIGHLIGHT SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
              Why Our Franchise Model Stands Out
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our franchise system is designed for entrepreneurs who want a low-risk, high-impact opportunity. We provide end-to-end support, from site selection to teacher training and marketing.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Comprehensive operational support</li>
              <li>✔ Proven international curriculum</li>
              <li>✔ Continuous mentorship and audits</li>
              <li>✔ Scalable multi-center growth opportunities</li>
            </ul>
           <button
  onClick={scrollToEnquiry}
  className="mt-8 px-8 py-3 rounded-full bg-orange-400 text-white font-bold shadow-lg hover:bg-orange-600 transition"
>
  Become a Franchise Partner
</button>

          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src={franchiseImg} alt="Franchise Growth" className="rounded-3xl shadow-2xl w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-14">What We Provide</h2>
          <ManualCarousel items={items} />
        </div>
      </section>

     {/* ================= WHY FRANCHISE ================= */}
<section id="why" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      <img
        src={franImg} // You can replace with another relevant image
        alt="Why Choose Franchise"
        className="rounded-3xl shadow-2xl w-full object-cover"
      />
    </motion.div>

    {/* RIGHT SIDE CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
        Why Choose Our Franchise
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        Our franchise system is designed for entrepreneurs who want a low-risk, high-impact opportunity. We provide end-to-end support, from site selection to teacher training, marketing, and ongoing mentorship. Focus on delivering exceptional preschool education while we handle the operations.
      </p>

      <ul className="space-y-4 text-gray-700">
        <li>✔ Comprehensive operational support</li>
        <li>✔ Proven international curriculum</li>
        <li>✔ Continuous mentorship and audits</li>
        <li>✔ Scalable multi-center growth opportunities</li>
      </ul>

            <button
  onClick={scrollToEnquiry}
  className="mt-8 px-8 py-3 rounded-full bg-orange-400 text-white font-bold shadow-lg hover:bg-orange-600 transition"
>
  Become a Franchise Partner
</button>
    </motion.div>
  </div>
</section>

       {/* ================= TIMELINE + ENQUIRY ================= */}
      <section id="franchise-enquiry" className="py-28 bg-gradient-to-r from-purple-800 to-orange-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-30 items-start">
             {/* ENQUIRY FORM */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-3xl shadow-2xl p-10 lg:sticky lg:top-32">
              <h3 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">Franchise Enquiry</h3>
              <form className="space-y-3">
                {["Full Name", "Email", "Phone Number", "City"].map((p, i) => (
                  <input key={i} placeholder={p} className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none" />
                ))}
                <textarea placeholder="Tell us about your background" className="w-full px-5 py-4 rounded-xl border border-gray-300 h-28 focus:ring-2 focus:ring-purple-500 outline-none" />
                <button type="submit" className="w-full py-4 rounded-full bg-orange-400 text-white font-bold text-lg hover:bg-orange-600 transition">
                  Submit Enquiry
                </button>
              </form>
            </motion.div>

            {/* TIMELINE */}
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-8">Franchise Process</h2>
              <div className="relative space-y-8">

  {/* Vertical Gradient Line */}
  <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-purple-300 via-purple-500 to-orange-400 rounded-full" />

  {processSteps.map((step, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6"
    >
      {/* Step Circle */}
      <div className="relative z-10 w-14 h-14 rounded-full bg-white border-4 border-orange-400 text-purple-800 font-extrabold text-lg flex items-center justify-center shadow-lg">
        {i + 1}
      </div>

      {/* Step Content */}
      <div>
       <h4 className="text-lg font-bold text-white">
  {step.step}
</h4>
<p className="text-black text-sm mt-1 font-semibold leading-relaxed">
  {step.desc}
</p>

      </div>
    </motion.div>
  ))}
</div>
            </div>
           
          </div>
        </div>
      </section>

{/* ================= INVESTMENT & ROI (NEW UI) ================= */}
<section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 text-center mb-16">
      Franchise Investment & ROI
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {roi.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.04 }}
          className="relative bg-gradient-to-r from-purple-200 to-orange-200 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-white overflow-hidden"
        >
          {/* Left Accent Bar */}
          <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-400 to-purple-500" />

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-400 text-3xl mb-6">
            {item.icon}
          </div>

          {/* Text */}
          <h4 className="text-lg font-semibold text-purple-800">
            {item.title}
          </h4>
          <p className="text-4xl font-extrabold text-black mt-3">
            {item.value}
          </p>

          {/* Decorative Glow */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-orange-400/30 rounded-full blur-3xl" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* ================= CTA ================= */}
     <section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <div className="bg-gradient-to-r from-purple-800 to-orange-500 rounded-[2.5rem] p-16 text-center text-white shadow-2xl">
      
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Start Your Preschool Journey With Us
      </h2>

      <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
        Partner with a trusted preschool brand and build a profitable,
        future-ready educational institution.
      </p>

      <button
        onClick={scrollToEnquiry}
        className="px-12 py-4 rounded-full bg-white text-purple-800 font-bold text-lg hover:scale-105 transition"
      >
        Enquire Now
      </button>
    </div>
  </div>
</section>

    </div>
  );
}
