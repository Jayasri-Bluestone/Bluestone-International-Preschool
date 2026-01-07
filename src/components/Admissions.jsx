import { useState } from "react";
import { motion } from "framer-motion";
import boyImg from "../assets/boy1.webp";
import bgImg from "../assets/BLUES.png"; // <-- ADD cute kids background

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Inside your Admissions component
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    // 👇 GET THE IP FROM ENVIRONMENT OR USE THE STRING DIRECTLY
    // For local deployment, use your IP found via 'ipconfig'
 const API_BASE = import.meta.env.VITE_API_BASE_URL;

    try {
      // 🔄 CHANGED: Removed "http://localhost:5000" and used API_BASE
     

const res = await fetch(`${API_BASE}/api/admissions`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),

      });

      if (res.ok) {
        setSuccess("🎉 Admission form submitted successfully!");
        setFormData({
          parentName: "",
          phone: "",
          email: "",
          program: "",
          message: "",
        });
      } else {
        alert("Failed to submit form");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Submission failed. Is the backend server running?");
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your return statement

  return (
    <>
      {/* HERO FORM SECTION */}
      <section
        className="relative min-h-full w-full flex items-center justify-center px-6 py-16"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#442B89]/90 to-[#FF8E3C]/80"></div>

        <div className="relative z-10 max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

          {/* FORM CARD */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md mx-auto border-4 border-yellow-400"
          >
            <h2 className="text-3xl font-extrabold text-purple-900 text-center mb-1">
              Admission Enquiry 🧸
            </h2>
            <p className="text-gray-500 text-center mb-6 text-sm">
              Begin a joyful learning journey 🌈
            </p>

            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Parent Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full mb-3 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
            >
              <option value="">Select Program</option>
              <option>Children Program</option>
              <option>Nestler</option>
              <option>Bambino</option>
              <option>B Junior</option>
              <option>B Senior</option>
            </select>

            <textarea
              name="message"
              placeholder="Message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-2 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-3 rounded-full font-bold hover:bg-orange-400 transition shadow-lg"
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>

            {success && (
              <p className="text-green-600 text-center mt-4 font-semibold animate-bounce">
                {success}
              </p>
            )}
          </motion.form>

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center relative"
          >
            <img
              src={boyImg}
              alt="Happy Child"
              className="h-[550px] drop-shadow-2xl animate-floating"
            />
          </motion.div>
        </div>
      </section>

    </>
  );
}
