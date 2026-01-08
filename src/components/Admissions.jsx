import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, ClipboardList, UserCheck, CalendarDays } from "lucide-react";
import boyImg from "../assets/boy1.webp";
import bgImg from "../assets/BLUES.png";


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
  const [status, setStatus] = useState({ type: "", message: "" }); // { type: 'success' | 'error', message: '' }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Auto-hide alerts after 5 seconds
  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccess(""); // Reset success state

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  try {
    const res = await fetch(`${API_BASE}/api/admissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSuccess("success"); // Trigger the green alert
      setFormData({
        parentName: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
    } else {
      setSuccess("error"); // Trigger the red alert
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setSuccess("connection_error");
  } finally {
    setLoading(false);
    // Auto-hide the alert after 4 seconds
    setTimeout(() => setSuccess(""), 4000);
  }
};

  return (
    <div className="overflow-x-hidden">
      {/* FLOATING ALERT NOTIFICATION */}
   {/* FLOATING NOTIFICATION ALERT */}
<AnimatePresence>
  {success && (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed top-10 right-6 z-[100] flex items-center gap-4 p-5 rounded-2xl shadow-2xl border-l-8 bg-white max-w-sm"
      style={{ 
        borderLeftColor: success === "success" ? "#22c55e" : "#ef4444" 
      }}
    >
      <div className={`p-2 rounded-full ${success === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
        {success === "success" ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        )}
      </div>
      
      <div>
        <h4 className="font-bold text-purple-900">
          {success === "success" ? "Submission Received!" : "System Error"}
        </h4>
        <p className="text-xs text-gray-500">
          {success === "success" 
            ? "We have received your enquiry and will contact you shortly." 
            : "We couldn't reach the server. Please try again later."}
        </p>
      </div>
      
      <button onClick={() => setSuccess("")} className="text-gray-300 hover:text-gray-500">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </motion.div>
  )}
</AnimatePresence>

      {/* HERO FORM SECTION */}
      <section
        className="relative min-h-screen w-full flex items-center justify-center px-6 py-20"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#442B89]/90 to-[#FF8E3C]/80"></div>

        <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* FORM CARD */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 w-full max-w-md mx-auto border-[6px] border-yellow-300"
          >
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-purple-900 mb-2">Join Our Family 🧸</h2>
              <p className="text-gray-500 font-medium">Start your child's global journey today.</p>
            </div>

            <div className="space-y-4">
              <input type="text" name="parentName" placeholder="Parent Name" value={formData.parentName} onChange={handleChange} required className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none transition" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none transition" />
              <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none transition" />
              <select name="program" value={formData.program} onChange={handleChange} required className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none transition">
                <option value="">Select Program</option>
                <option>Nestler (6m+)</option>
                <option>Bambino (2-3y)</option>
                <option>B Junior (3-4y)</option>
                <option>B Senior (4-5y)</option>
              </select>
              <textarea name="message" placeholder="Tell us about your child..." rows="2" value={formData.message} onChange={handleChange} className="w-full px-5 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-purple-400 outline-none transition" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-orange-500 text-white py-4 rounded-2xl font-black text-lg hover:bg-orange-400 transition shadow-xl disabled:opacity-50"
            >
              {loading ? "Registering..." : "SUBMIT ENQUIRY"}
            </motion.button>
          </motion.form>

          {/* IMAGE SIDE */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="hidden md:flex flex-col items-center">
            <img src={boyImg} alt="Happy Child" className="h-[600px] drop-shadow-2xl animate-bounce-slow" />
            <div className="bg-white/20 backdrop-blur-md p-6 rounded-3xl border border-white/30 text-white text-center mt-[-50px]">
              <p className="text-2xl font-bold">1000+ Happy Kids</p>
              <p className="text-sm opacity-80 font-medium">Enrolled across our international centers</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: ADMISSIONS PROCESS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-purple-900 mb-16">The Enrollment Process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ClipboardList />, title: "1. Enquiry", desc: "Fill out the form above or visit our campus for a tour." },
              { icon: <UserCheck />, title: "2. Interaction", desc: "A brief friendly meeting with the child and parents." },
              { icon: <CalendarDays />, title: "3. Registration", desc: "Complete the documentation and welcome your child to Bluestone!" },
            ].map((step, i) => (
              <div key={i} className="text-center p-8 bg-gray-50 rounded-3xl hover:bg-purple-50 transition">
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}