import React, { useState } from 'react';
import { Sun, Palette, Leaf, FlaskConical, Book, Utensils, CookingPot, CalendarCheck, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";


// Mock images for demonstration
import heroBg from '../assets/gallery5.jpeg'; // Placeholder for a vibrant summer hero image
import activity1 from '../assets/gallery2.jpeg'; // Kids playing with water
import activity2 from '../assets/gallery3.jpeg'; // Kids doing art outdoors
import activity3 from '../assets/gallery1.jpeg'; // Kids exploring nature

const summerActivities = [
  { icon: <Sun size={28} />, title: "Splash & Play", desc: "Daily water games and sensory fun to beat the heat." },
  { icon: <Palette size={28} />, title: "Art Explorers", desc: "Unleash creativity with outdoor painting, crafts, and sculpture." },
  { icon: <Leaf size={28} />, title: "Nature Navigators", desc: "Explore our garden, learn about plants, and meet mini-beasts." },
  { icon: <FlaskConical size={28} />, title: "Young Scientists", desc: "Hands-on experiments making science exciting and understandable." },
  { icon: <Book size={28} />, title: "Storybook Adventures", desc: "Immersive storytelling, puppet shows, and drama games." },
  { icon: <CookingPot size={28} />, title: "Culinary Creators", desc: "Fun, simple cooking and baking workshops for little chefs." },
];

const faqData = [
  { question: "What are the age groups for the Summer Club?", answer: "Our club is designed for children aged 2 to 5 years, with activities tailored for each age group." },
  { question: "What should my child bring each day?", answer: "Children should bring a change of clothes, sunscreen, and a hat. All meals and activity materials are provided." },
  { question: "Are the educators certified?", answer: "Yes, all our Summer Club educators are fully certified Bluestone staff, experienced in early childhood development." },
  { question: "What are the enrollment options?", answer: "We offer flexible weekly and bi-weekly enrollment options. Full summer packages are also available." },
];

export default function SummerClub() {
  const [openFAQ, setOpenFAQ] = useState(null);
   const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">
      {/* 1. Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center flex items-center justify-center p-6"
        style={{ backgroundImage: `url(${heroBg || 'https://images.unsplash.com/photo-1473654727142-b06886e81e3a?auto=format&fit=crop&q=80&w=1920'})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80 backdrop-brightness-75"></div>
        <div className="relative z-10 text-center text-white max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg"
          >
            Dive into a Summer of <span className="text-orange-400">Discovery!</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md"
          >
            Bluestone International Summer Club—where learning meets adventure for young minds aged 2-5.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.8, duration: 0.8 }}
            onClick={() => navigate("/admissions")}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
          >
        
            <button className="bg-white/20 border border-white text-orange-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all">
              Register Now!
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Activity Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-16">Our Summer Adventures</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {summerActivities.map((activity, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-b-4 border-purple-800"
              >
                <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-3">{activity.title}</h3>
                <p className="text-gray-600 text-center">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The "Bluestone Summer Advantage" (Benefits Section) */}
<section className="py-24 bg-[#FAF7F2]">
  <div className="container mx-auto px-6">
    <div className="flex flex-col lg:flex-row items-center gap-16">
      
      {/* LEFT SIDE: CONTENT & POINTS */}
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-5xl font-black text-purple-800 mb-8 leading-tight">
          The Bluestone <br />
          <span className="text-orange-500">Summer Edge</span>
        </h2>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          At Bluestone International, summer isn't just a break—it's a launchpad for creativity and 
          social development in a world-class environment.
        </p>
        
        <div className="space-y-8">
          {[
            { icon: <CalendarCheck size={28} />, title: "Flexible Scheduling", desc: "Choose weekly or monthly blocks that align with your family vacations." },
            { icon: <Heart size={28} />, title: "Nurturing Environment", desc: "Every child is treated like family in our secure, loving campus." },
            { icon: <ShieldCheck size={28} />, title: "Certified Global Educators", desc: "Led by internationally trained experts in early childhood pedagogy." },
            { icon: <Utensils size={28} />, title: "Organic & Healthy Meals", desc: "Chef-prepared, nutrient-dense meals to fuel active summer days." },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-5 group"
            >
              <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-purple-900 group-hover:text-white transition-all duration-300">
                {benefit.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-purple-900 mb-1">{benefit.title}</h4>
                <p className="text-gray-500 leading-snug">{benefit.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE WITH DECORATIVE ELEMENTS */}
      <div className="lg:w-1/2 relative">
        {/* Floating Accent Shapes */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 border-[12px] border-white shadow-2xl rounded-[3rem] overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000" 
            alt="Happy Kids at Bluestone" 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        
        {/* Floating Badge */}
        <div className="absolute top-10 -left-8 bg-white p-5 rounded-2xl shadow-xl z-20 border-b-4 border-orange-500 hidden md:block">
          <p className="text-3xl font-black text-purple-900">1:5</p>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Ratio</p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* 3.5. Daily Routine Timeline */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <h3 className="text-3xl font-black text-center text-purple-900 mb-12">Typical Day at Club</h3>
    <div className="flex flex-wrap justify-center gap-4">
      {[
        { time: "09:00 AM", task: "Welcome & Circle Time" },
        { time: "10:30 AM", task: "Splash & Sensory Play" },
        { time: "12:30 PM", task: "Organic Lunch" },
        { time: "02:00 PM", task: "Art & STEM Workshop" },
        { time: "04:00 PM", task: "Storytelling & Farewell" }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center bg-gray-50 border border-gray-100 px-6 py-4 rounded-3xl min-w-[180px]">
          <span className="text-orange-500 font-black text-lg">{item.time}</span>
          <span className="text-gray-600 text-sm font-medium">{item.task}</span>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* 4. Adventure Gallery Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black text-purple-900 mb-4">
        Capturing the <span className="text-orange-500">Magic</span>
      </h2>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto">
        Take a peek at the smiles, discoveries, and masterpieces created at Bluestone Summer Club.
      </p>
    </div>

    {/* MASONRY-STYLE GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
      
      {/* Featured Large Image */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg"
      >
        <img src={heroBg} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
          <p className="text-white font-bold text-xl">Outdoor Exploration</p>
        </div>
      </motion.div>

      {/* Top Right */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-lg bg-orange-100"
      >
        <img src={activity1} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Sun className="text-white" size={40} />
        </div>
      </motion.div>

      {/* Bottom Right Small */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-1 relative group overflow-hidden rounded-[2rem] shadow-lg"
      >
        <img src={activity2} alt="Gallery" className="w-full h-full object-cover" />
      </motion.div>

      {/* Wide Bottom Row */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="md:col-span-2 relative group overflow-hidden rounded-[2rem] shadow-lg"
      >
        <img src={activity3} alt="Gallery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center p-8">
          <p className="text-white font-bold text-xl">Creative Arts</p>
        </div>
      </motion.div>

    </div>

  </div>
</section>

      {/* 5. FAQ Accordion */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-extrabold text-center text-purple-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-blue-100">
                <button
                  className="flex justify-between items-center w-full text-left font-bold text-xl text-gray-800"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {item.question}
                  <span className="text-gray-800">
                    {openFAQ === index ? '-' : '+'}
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600 border-t border-blue-100 pt-4"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final CTA */}
   {/* 6. Final CTA - Centered Layout */}
<section className="py-20 bg-white flex justify-center px-6">
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="w-full max-w-5xl bg-gradient-to-br from-purple-700 via-purple-500 to-orange-500 rounded-[3rem] p-8 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
  >
    {/* Decorative Background Circles */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

    <div className="relative z-10">
      <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
        Ready for a Summer of <br />
        <span className="text-orange-400">Endless Fun?</span>
      </h2>
      
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-purple-100 font-medium">
        Limited spots available! Secure your child's place today and give them an 
        unforgettable international summer experience.
      </p>

      <div className="flex flex-col items-center gap-6">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
           onClick={() => navigate("/admissions")}
          className="bg-orange-500 text-white px-10 py-3 rounded-full font-extrabold text-xl hover:bg-white hover:text-orange-600 shadow-[0_20px_50px_rgba(234,88,12,0.3)] transition-all duration-300"
        >
          Enroll Your Child Today!
        </motion.button>
        
        <div className="flex items-center gap-3 text-orange-200 font-bold bg-white/10 px-6 py-2 rounded-full border border-white/20">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
          </span>
          Early bird discount available until May 15th!
        </div>
      </div>
    </div>
  </motion.div>
</section>
    </div>
  );
}