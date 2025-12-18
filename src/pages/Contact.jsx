export default function ContactSection() {
  return (
    <section className="w-full h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

        {/* LEFT – CONTACT FORM */}
        <div className="bg-[#222A41] text-white px-8 md:px-16 py-14 flex items-center">
          <div className="w-full max-w-xl">

            <p className="text-2xl tracking-wide mb-3">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-10">
              Contact Us
            </h2>

            {/* Name */}
            <div className="mb-6">
              {/* <label className="text-sm text-gray-300 mb-2 block">
                Name
              </label> */}
              <input
                type="text"
                placeholder="Parent Name"
                className="w-full bg-[#3A4158] text-white px-5 py-3 rounded-xl outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              {/* <label className="text-sm text-gray-300 mb-2 block">
                Email
              </label> */}
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full bg-[#3A4158] text-white px-5 py-3 rounded-xl outline-none"
              />
            </div>

            {/* Location */}
            <div className="mb-10">
              {/* <label className="text-sm text-gray-300 mb-2 block">
                Location
              </label> */}
              <select className="w-full bg-[#3A4158] text-gray-300 px-5 py-3 rounded-xl outline-none">
                <option>Childrens Program</option>
                <option>Nestler</option>
                <option>Babino</option>
                <option>B Junior</option>
                <option>B Senior</option>

              </select>
            </div>
 <div className="mb-6">
            <input
                type="text"
                placeholder="Message"
                className="w-full bg-[#3A4158] text-white px-5 py-3 rounded-xl outline-none"
              />
            </div>

            {/* Button */}
            <button
              className="w-full bg-orange-600 text-white py-4 rounded-full
                         font-semibold text-lg 
                         hover:bg-orange-500 transition"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* RIGHT – GOOGLE MAP */}
         <div className="w-full h-full">
         <iframe
  title="School Location"
  src="https://www.google.com/maps?q=No.%209/179/1,%20Vettukadu,%20Erumaipatti%20PO,%20Idappadi%20TK,%20Tamil%20Nadu%20637102&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
  allowFullScreen
/>
        </div>
        </div>
    </section>
  );
}
