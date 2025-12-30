import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="relative w-[360px] h-[440px]">
      {/* SVG Speech Bubble */}
      <svg
        viewBox="0 0 360 440"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="
            M60 20
            H300
            Q340 20 340 60
            V300
            Q340 340 300 340
            H140
            C110 340 95 360 85 385
            C75 410 55 420 45 420
            C55 395 60 365 55 350
            C30 345 20 325 20 300
            V60
            Q20 20 60 20
            Z
          "
          fill={testimonial.bg}
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 h-full px-8 py-10">
        {/* Profile */}
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-[#1F2B6C] text-left">
              {testimonial.name}
            </h4>
            <p className="text-sm text-orange-500 font-semibold">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-700 text-[16px] leading-[1.5rem] py-2 px-2">
          {testimonial.text}
        </p>

        {/* ⭐ STARS — FIXED POSITION */}
        <div className="absolute bottom-35 right-10 flex gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Quote mark */}
        <div className="absolute bottom-8 right-10 text-8xl font-serif font-black text-black">
          ”
        </div>
      </div>
    </div>
  );
}
