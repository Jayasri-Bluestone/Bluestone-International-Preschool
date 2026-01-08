import { FaStar } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div
      className="
        relative
        w-full max-w-[260px] h-[320px]
        sm:max-w-[360px] sm:h-[440px]
        mx-auto
      "
    >
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
      <div className="relative z-10 h-full px-6 py-8 sm:px-8 sm:py-10">
        {/* Profile */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
          />
          <div>
            <h4 className="font-bold text-purple-800 text-left text-md sm:text-lg">
              {testimonial.name}
            </h4>
            <p className="text-sm text-left text-orange-500 font-semibold">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-700 text-sm sm:text-[16px] leading-[1.4rem] sm:leading-[1.5rem] py-2 px-1">
          {testimonial.text}
        </p>

        {/* ⭐ Stars */}
        <div className="absolute bottom-22 sm:bottom-36 right-8 sm:right-10 flex gap-1 text-yellow-400 text-sm sm:text-base">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Quote */}
        <div
          className="
          absolute bottom-7 sm:bottom-8 right-8 sm:right-10
          text-6xl sm:text-8xl font-serif font-black text-black
          "
        >
          ”
        </div>
      </div>
    </div>
  );
}
