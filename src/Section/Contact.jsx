export default function ContactSection() {
  return (
    <section className="w-full md:h-screen h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">

        {/* LEFT – CONTACT FORM */}
        <div className="bg-[#222A41] text-white px-8 lg:px-36 py-14 flex items-center">
          <div className="w-full w-xl">

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
         <div className="w-full h-100 md:h-full">
         {/* <iframe
  title="School Location"
  src="https://maps.app.goo.gl/nxUW9H9x3BhbJphT6&output=embed"
  className="w-full h-full border-0 position"
  loading="lazy"
  allowFullScreen
/> */}
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0064802203015!2d77.895065!3d11.551392499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9599f3a4546b9%3A0x4aea79cf0f5182a9!2sBluestone%20Overseas%20Consultants!5e0!3m2!1sen!2ssg!4v1767779853193!5m2!1sen!2ssg"
         title="School Location"
       className="w-full h-full border-0 position"
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
       </div>
        </div>
    </section>
  );
}
