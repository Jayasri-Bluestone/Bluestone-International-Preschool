import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
// Import Lucide icons to match your Admissions style
import { AlertCircle, CheckCircle, X } from "lucide-react";
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
  FaRupeeSign,
  FaClock,
} from "react-icons/fa";

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
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10  bg-purple-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => scroll("next")}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-purple-800 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
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
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{
                backgroundColor: item.color,
                color: "white",
                fontSize: "1.8rem",
              }}
            >
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

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // NOTIFICATION STATE (Matches Admissions.js)
  const [success, setSuccess] = useState(""); // "success" | "error" | "connection_error" | ""

  const scrollToEnquiry = () => {
    document
      .getElementById("franchise-enquiry")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");

    const API_BASE =
      import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${API_BASE}/api/franchise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setSuccess("success");
        setFormValues({
          fullName: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
      } else {
        setSuccess("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccess("connection_error");
    } finally {
      setIsSubmitting(false);
      // Auto-hide after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    }
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
      desc: "Share your basic details and interest in starting a preschool franchise.",
    },
    {
      step: "Discussion & Location Review",
      desc: "Our experts evaluate your location, budget, and market potential.",
    },
    {
      step: "Agreement & Onboarding",
      desc: "Sign the franchise agreement and get onboarded into our system.",
    },
    {
      step: "School Setup & Training",
      desc: "Infrastructure setup, curriculum planning, and staff training begin.",
    },
    {
      step: "Marketing & Admissions",
      desc: "Launch marketing campaigns and start student admissions with our support.",
    },
    {
      step: "Grand Opening 🎉",
      desc: "Your preschool opens successfully with full operational support.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] overflow-hidden">
      {/* FLOATING NOTIFICATION ALERT (Matches Admissions UI) */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-6 z-[999] flex items-center gap-4 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-l-8 bg-white max-w-sm"
            style={{
              borderLeftColor: success === "success" ? "#22c55e" : "#ef4444",
            }}
          >
            <div
              className={`p-2 rounded-full ${
                success === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {success === "success" ? (
                <CheckCircle size={24} />
              ) : (
                <AlertCircle size={24} />
              )}
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-purple-900">
                {success === "success" ? "Application Sent!" : "Oops!"}
              </h4>
              <p className="text-xs text-gray-500 leading-tight">
                {success === "success"
                  ? "We've received your franchise enquiry. Our team will contact you soon."
                  : success === "connection_error"
                  ? "Network error. Please check your internet and try again."
                  : "Something went wrong. Please try again later."}
              </p>
            </div>

            <button
              onClick={() => setSuccess("")}
              className="text-gray-300 hover:text-gray-600 transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative h-[85vh] flex items-center justify-center">
        <img
          src={heroImg}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-6">
            <span className="text-orange-400"> Franchise </span>Opportunity
          </h1>
          <p className="text-white/90 text-sm md:text-lg mb-10">
            Build a future-ready international preschool with strong systems &
            support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={scrollToEnquiry}
              className="px-8 py-3 rounded-full bg-transparent border border-white text-orange-400 font-bold shadow-lg hover:bg-purple-100 transition"
            >
              Apply for Franchise
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() =>
                document
                  .getElementById("why")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 rounded-full bg-orange-500 text-white font-bold shadow-lg hover:bg-white hover:text-orange-400 transition"
            >
              Why Partner With Us
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* ================= HIGHLIGHT SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-purple-800 mb-6">
              Why Our Franchise Model Stands Out
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our franchise system is designed for entrepreneurs who want a
              low-risk, high-impact opportunity. We provide end-to-end support,
              from site selection to teacher training and marketing.
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

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={franchiseImg}
              alt="Franchise Growth"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="py-24 bg-[#FFF7ED]">
        <div className="max-w-7xl mx-auto px-6 ">
          <h2 className="text-4xl font-extrabold text-purple-800 text-center mb-14">
            What We Provide
          </h2>
          <ManualCarousel items={items} />
        </div>
      </section>

      {/* ================= WHY FRANCHISE ================= */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={franImg}
              alt="Why Choose Franchise"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-purple-800 mb-6">
              Why Choose Our Franchise
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our franchise system is designed for entrepreneurs who want a
              low-risk, high-impact opportunity. We provide end-to-end support,
              from site selection to teacher training, marketing, and ongoing
              mentorship. Focus on delivering exceptional preschool education
              while we handle the operations.
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
      <section
        id="franchise-enquiry"
        className="py-28 bg-gradient-to-r from-purple-800 to-orange-500"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-30 items-start">
            {/* ENQUIRY FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] shadow-2xl p-10"
            >
              <h3 className="text-3xl font-extrabold text-center text-purple-800 mb-2">
                Franchise Enquiry
              </h3>
              <p className="text-gray-500 mb-8 text-center">
                Fill the form and our team will get back to you within 24 hours.
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                  <input
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                  />
                </div>
                <input
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  placeholder="Target City"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                />
                <textarea
                  name="message"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your business interest..."
                  rows="3"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-500 outline-none transition"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Submit Application"}
                </button>
              </form>
            </motion.div>

            {/* TIMELINE */}
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-8">
                Franchise Process
              </h2>
              <div className="relative space-y-8">
                <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-purple-300 via-purple-500 to-orange-400 rounded-full" />
                {processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-start gap-6"
                  >
                    <div className="relative z-10 w-14 h-14 rounded-full bg-white border-4 border-orange-400 text-purple-800 font-extrabold text-lg flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
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

      {/* ================= INVESTMENT & ROI ================= */}
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
                <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-orange-400 to-purple-500" />
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-orange-400 text-3xl mb-6">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-purple-800">
                  {item.title}
                </h4>
                <p className="text-4xl font-extrabold text-black mt-3">
                  {item.value}
                </p>
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
