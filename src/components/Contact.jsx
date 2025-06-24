import { useState } from "react";
import { FaComment, FaEnvelope, FaPhone, FaTimes, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [isOpen, setIsopen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const handleSubmit = (e) => {
  e.preventDefault();
  alert("Thanks for contacting! I will reach out soon.");
  setFormData({ name: "", email: "", message: "" });
};

    return (
        <section>
            <div className="flex justify-between transition-all duration-500 transform scale-95 hover:scale-100">
                <h2 className="text-2xl text-indigo-500 font-semibold">GOT A PROJECT IN MIND</h2>
                <button onClick={()=>setIsopen(!isOpen)} className="border-2 p-2 rounded-xl hover:bg-indigo-400 cursor-pointer">{isOpen ? <FaTimes /> : "CONTACT ME"}</button>
            </div>
           {
            isOpen && (
                 <div className="md:flex justify-between w-full">

                    {/* Contact Form */}
        <div className="p-6 rounded-xl w-full shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400 flex items-center">
            <FaComment className="mr-2" /> Comments
          </h3>

          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-base font-medium">
               Name *
              <input
                type="text"
                name="name"
                value={formData.name}
  onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your name"
              />
            </label>

            <label className="block mb-2 text-base font-medium">
               Email *
              <input
                type="email"
                name="email"
                value={formData.email}
  onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700  focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </label>

            <label className="block mt-3 mb-2 text-base font-medium">
               Message *
              <textarea
                name="message"
                value={formData.message}
  onChange={handleChange}
                required
                className="w-full mt-1 p-2 rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here..."
                rows="4"
              />
            </label>

            <button
              type="submit"
              className="w-full mt-4 bg-indigo-300 hover:bg-indigo-500 font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
                 <div className="p-6 w-full rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Get in Touch</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-indigo-400" />
              <a
                href="mailto:mdabubakar.dev@gmail.com"
                className="text-lg text-indigo-400 hover:underline"
                rel="noopener noreferrer"
              >
                mdabubakar.dev@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhone className="text-xl text-indigo-400" />
              <a href="tel:+8801773398308" className="text-lg text-indigo-400 hover:underline">
                +880 1773398308
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-xl text-indigo-500" />
              <a
                href="https://wa.me/8801773398308?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-indigo-500 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

            </div>
            )
           }
        </section>
    );
};

export default Contact;