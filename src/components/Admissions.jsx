import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, ClipboardList, UserCheck, CalendarDays, X } from "lucide-react";
import boyImg from "../assets/boy2.webp";
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
  const [success, setSuccess] = useState(""); // "success" | "error" | "connection_error" | ""

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(""); 

    // Use environment variable with a local fallback for development
    const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    try {
      const res = await fetch(`${API_BASE}/api/admissions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("success");
        setFormData({ parentName: "", phone: "", email: "", program: "", message: "" });
      } else {
        setSuccess("error");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setSuccess("connection_error");
    } finally {
      setLoading(false);
      // Auto-hide notification after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    }
  };

  return (
    <div className="overflow-x-hidden font-sans">
      
      {/* FLOATING NOTIFICATION ALERT */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-6 z-[999] flex items-center gap-4 p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-l-8 bg-white max-w-sm"
            style={{ 
              borderLeftColor: success === "success" ? "#22c55e" : "#ef4444" 
            }}
          >
            <div className={`p-2 rounded-full ${success === "success" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}>
              {success === "success" ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
            </div>
            
            <div className="flex-1">
              <h4 className="font-bold text-purple-900">
                {success === "success" ? "Enquiry Sent!" : "Oops!"}
              </h4>
              <p className="text-xs text-gray-500 leading-tight">
                {success === "success" 
                  ? "We've received your details and will call you within 24 hours." 
                  : success === "connection_error" 
                    ? "Network error. Please check your internet and try again."
                    : "Something went wrong on our end. Please try again later."}
              </p>
            </div>
            
            <button onClick={() => setSuccess("")} className="text-gray-300 hover:text-gray-600 transition-colors">
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO & FORM SECTION */}
<section
  className="relative h-[85vh] w-full flex items-center justify-center px-4 py-12 md:py-20"
  style={{ 
    backgroundImage: `url(${bgImg})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
  {/* Deep Purple/Orange Brand Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-purple-800/90 to-orange-500/80"></div>

  <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
    
    {/* LEFT: FORM CARD */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center lg:justify-start"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-[2.5rem] shadow-2xl p-6 md:p-10 w-full max-w-md border-[6px] border-yellow-400 relative"
      >
        {/* Floating Badge - Scaled for 85vh */}
        <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-xl rotate-12 shadow-lg hidden lg:block">
          <p className="font-black text-[10px] uppercase tracking-widest">Admissions Open</p>
          <p className="text-lg font-bold">2026-27</p>
        </div>

        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-purple-900 mb-1">Join Our Family 🧸</h2>
          <p className="text-sm text-gray-500 font-medium italic">Give your child a world-class start.</p>
        </div>

        <div className="space-y-3 md:space-y-6">
          <input type="text" name="parentName" placeholder="Parent Name" value={formData.parentName} onChange={handleChange} required className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all text-sm" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none text-sm" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none text-sm" />
          </div>
          
          <select name="program" value={formData.program} onChange={handleChange} required className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none transition-all appearance-none cursor-pointer text-sm">
            <option value="">Select Program</option>
            <option>Nestler (6m+)</option>
            <option>Bambino (2-3y)</option>
            <option>B Junior (3-4y)</option>
            <option>B Senior (4-5y)</option>
          </select>

          <textarea name="message" placeholder="Messages..." rows="2" value={formData.message} onChange={handleChange} className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-purple-500 outline-none text-sm resize-none" />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full mt-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-black text-lg hover:shadow-xl transition-all shadow-lg disabled:opacity-50 uppercase tracking-wider"
        >
          {loading ? "Processing..." : "Apply Now"}
        </motion.button>
      </form>
    </motion.div>

    {/* RIGHT: IMAGE & TRUST BADGE - Optimized for h-85vh */}
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }} 
      className="hidden lg:flex flex-col items-center justify-center relative h-full"
    >
      <motion.img 
        animate={{ y: [0, -15, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        src={boyImg} 
        alt="Happy Child" 
        className="h-[500px] xl:h-[580px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" 
      />
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 text-white text-center mt-[-60px] shadow-2xl">
        <p className="text-2xl font-black">100+ Happy Kids</p>
        <p className="text-orange-200 font-bold tracking-widest uppercase text-[10px] mt-1">International Standard Campus</p>
      </div>
    </motion.div>

  </div>
</section>

      {/* ENROLLMENT PROCESS SECTION */}
      <section className="py-12 md:py-16 lg:py-24 bg-[#FAF9F6]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-20 ">
            <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">Enrollment Made Easy</h2>
            <div className="h-2 w-24 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <ClipboardList size={32} />, title: "1. Online Enquiry", desc: "Submit the registration form with your basic details." },
              { icon: <UserCheck size={32} />, title: "2. Personal Meet", desc: "Visit our campus for a tour and a friendly interaction session." },
              { icon: <CalendarDays size={32} />, title: "3. Confirmation", desc: "Submit documents, complete registration, and start the journey!" },
            ].map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group p-10 bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 text-center"
              >
                <div className="w-20 h-20 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}