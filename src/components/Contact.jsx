import { useState } from "react";
import { FaComment, FaEnvelope, FaPhone, FaTimes, FaWhatsapp, FaLinkedin } from "react-icons/fa";

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
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header CTA */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-indigo-50 p-8 rounded-2xl mb-10 transition-all duration-300 border border-indigo-100 shadow-sm">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">Got a project in mind?</h2>
          <p className="text-indigo-600 font-medium mt-2 text-lg italic">Let’s build something amazing together.</p>
        </div>
        <button 
          onClick={() => setIsopen(!isOpen)} 
          className={`flex items-center gap-2 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-indigo-200 cursor-pointer ${isOpen ? "bg-white text-red-500 border border-red-100" : "bg-indigo-600 text-white hover:bg-indigo-700"}`}
        >
          {isOpen ? <><FaTimes /> CLOSE</> : "CONTACT ME"}
        </button>
      </div>

      {isOpen && (
        <div className="grid md:grid-cols-2 gap-10 animate-fadeIn">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-50">
            <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <FaComment className="text-indigo-500" /> Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="example@gmail.com"
                />
              </div>

              <div>
                <label className="text-sm font-bold text-gray-600 uppercase tracking-wider">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 rounded-lg border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  placeholder="Describe your project..."
                  rows="4"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                <a href="mailto:mdabubakar.dev@gmail.com" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="bg-indigo-800 p-3 rounded-lg"><FaEnvelope className="text-indigo-300" /></div>
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase">Email Me</p>
                    <p className="text-lg">mdabubakar.dev@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+8801773398308" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="bg-indigo-800 p-3 rounded-lg"><FaPhone className="text-indigo-300" /></div>
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase">Call Me</p>
                    <p className="text-lg">+880 1773398308</p>
                  </div>
                </a>

                <a href="https://wa.me/8801773398308" target="_blank" className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="bg-green-800/40 p-3 rounded-lg"><FaWhatsapp className="text-green-400" /></div>
                  <div>
                    <p className="text-xs font-bold text-green-400 uppercase">WhatsApp</p>
                    <p className="text-lg">Chat Live</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-800 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;