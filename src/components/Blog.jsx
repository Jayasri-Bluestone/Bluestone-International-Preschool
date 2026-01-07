import React, { useState, useEffect } from 'react';

export default function Blog() {
  const [email, setEmail] = useState('');

  // Optional: Set a target date for a countdown
  const calculateTimeLeft = () => {
    const difference = +new Date("2026-03-01") - +new Date(); // Set your date here
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // Update every minute
    return () => clearTimeout(timer);
  });

  return (
    <section className="w-full min-h-[85vh] bg-gradient-to-r from-purple-800 to-orange-500 flex items-center justify-center px-6 text-center">
      <div className="max-w-3xl">
        {/* Decorative Badge */}
        <span className="px-4 py-1 rounded-full bg-orange-600/20 text-orange-500 text-sm font-bold tracking-widest uppercase mb-6 inline-block">
          Coming Soon
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Our Blog is <span className="text-orange-600">Under Construction</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          We’re preparing deep dives into early childhood education, parenting tips, and school updates. Stay tuned for our first post!
        </p>

        {/* Simple Countdown */}
        {/* <div className="grid grid-cols-3 gap-4 mb-12 max-w-md mx-auto">
          {Object.keys(timeLeft).map((interval) => (
            <div key={interval} className="bg-[#3A4158] p-4 rounded-2xl">
              <div className="text-3xl font-bold text-white">{timeLeft[interval] || '0'}</div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">{interval}</div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
}