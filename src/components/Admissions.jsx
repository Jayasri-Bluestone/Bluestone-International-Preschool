import { useState } from "react";
import { motion } from "framer-motion";
import boyImg from "../assets/boy1.webp";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
     
       const res = await fetch("http://localhost:5000/api/admissions", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData)
});


      if (res.ok) {
        setSuccess("Admission form submitted successfully!");
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
    } catch (error) {
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#222A41] to-[#2e365a] flex items-center justify-center px-6 overflow-hidden">

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-lg"
        >
          <h2 className="text-3xl font-extrabold text-purple-900 mb-0 text-center">
            Admission Enquiry
          </h2>

          <p className="text-gray-500 text-center mb-8">
            Begin your child’s joyful learning journey
          </p>

          {/* Parent Name */}
          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="w-full mb-4 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full mb-4 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Parent Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mb-4 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Program Select */}
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full mb-4 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          >
            <option value="">Select Program</option>
            <option>Children Program</option>
            <option>Nestler</option>
            <option>Babino</option>
            <option>B Junior</option>
            <option>B Senior</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full mb-6 px-5 py-3 rounded-xl border focus:ring-2 focus:ring-orange-400 outline-none"
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white py-3 rounded-full font-bold
                       hover:bg-orange-400 transition shadow-lg"
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>

          {success && (
            <p className="text-green-600 text-center mt-4 font-semibold">
              {success}
            </p>
          )}
        </motion.form>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex justify-center relative"
        >
          <div className="absolute inset-0 bg-orange-400/20 blur-3xl rounded-full" />
          <img
            src={boyImg}
            alt="Happy Preschool Child"
            className="relative h-[620px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
