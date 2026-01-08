import React from 'react';
import { Shield, BarChart3, Users, Building2 } from 'lucide-react';
import { Camera, Utensils, HeartPulse, Laptop } from 'lucide-react';

const benefits = [
  {
    title: "Retention & Loyalty",
    desc: "Companies with childcare support see a 20% higher retention rate among mid-to-senior level talent.",
    icon: <Users className="w-8 h-8 text-orange-600" />
  },
  {
    title: "Reduced Absenteeism",
    desc: "Our 'Backup Care' program ensures your team is at work even when their primary care falls through.",
    icon: <Shield className="w-8 h-8 text-orange-600" />
  },
  {
    title: "Tax Advantages",
    desc: "Leverage government incentives for corporate childcare contributions to optimize your benefits budget.",
    icon: <BarChart3 className="w-8 h-8 text-orange-600" />
  }
];
const techFeatures = [
  { 
    title: "The Bluestone App", 
    icon: <Laptop className="text-white" />, 
    desc: "Real-time updates on naps, meals, and learning activities directly to the employee's phone." 
  },
  { 
    title: "HD Live Stream", 
    icon: <Camera className="text-white" />, 
    desc: "Secure end-to-end encrypted video feeds for parents to peek in anytime." 
  },
  { 
    title: "Health Monitoring", 
    icon: <HeartPulse className="text-white" />, 
    desc: "Daily contactless temperature checks and health logging for every child." 
  }
];

export default function Daycare() {
  return (
    <div className="bg-white font-sans text-[#222A41]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center bg-gradient-to-r from-purple-900/90 via-purple-700/80 to-orange-500/80 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Modern Office" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Future-Proof Your <br /><span className="text-orange-500">Workforce.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Bluestone International provides Tier-1 childcare solutions for companies that 
            view their employees as their greatest asset.
          </p>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold transition">
            Request Partnership Proposal
          </button>
        </div>
      </section>

      {/* Benefit Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Global Leaders Choose Bluestone</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition border border-gray-100">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFF7ED] text-purple-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">A Tech-Enabled <span className="text-orange-500">Safe Haven</span></h2>
            <p className="text-gray-800 mb-10 text-lg">
              We leverage the latest IoT and security technology to ensure that while your employees are focusing on their work, their children are in the safest environment possible.
            </p>
            <div className="space-y-8">
              {techFeatures.map((f, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="bg-orange-600 p-3 rounded-xl">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{f.title}</h4>
                    <p className="text-gray-800">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-orange-600/20 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&q=80" 
              className="rounded-[2rem] relative z-10 border border-gray-700 shadow-2xl" 
              alt="Security Monitoring"
            />
          </div>
        </div>
      </div>
    </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-purple-800 mb-10">Trusted By Industry Giants</p>
          <div className="flex flex-wrap justify-center items-center gap-12 ">
             {/* Replace these with real logos */}
             <div className="text-3xl font-black italic">MICROSOFT</div>
             <div className="text-3xl font-black italic">DELOITTE</div>
             <div className="text-3xl font-black italic">ACCENTURE</div>
             <div className="text-3xl font-black italic">ADOBE</div>
               <div className="text-3xl font-black italic">MICROSOFT</div>
             <div className="text-3xl font-black italic">DELOITTE</div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
