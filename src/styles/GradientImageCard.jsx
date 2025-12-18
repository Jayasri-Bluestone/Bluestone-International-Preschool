export default function GradientImageCard({
  title,
  description,
  image,
  gradientFrom,
  gradientTo,
  darkFrom,
  darkTo,
  radius,
}) {
  return (
    <div className={`relative group perspective ${radius}`}>
      
      <div
        className="
          relative w-full h-full
          min-h-[190px] lg:min-h-[210px]
          transition-transform duration-700 ease-in-out
          transform-style-preserve-3d
          group-hover:rotate-y-180
        "
      >

        {/* FRONT — LIGHT IMAGE */}
        <div
          className={`absolute inset-0 backface-hidden ${radius}`}
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo}),
              url(${image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* BACK — IMAGE + DARK GRADIENT (PER CARD) */}
        <div
          className={`
            absolute inset-0 backface-hidden rotate-y-180
            flex flex-col justify-center items-center
            text-center px-6
            ${radius}
          `}
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, ${darkFrom}, ${darkTo}),
              url(${image})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="text-lg font-semibold mb-3 text-white">
            {title}
          </h3>

          <p className="text-sm leading-relaxed text-white/90">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
}
