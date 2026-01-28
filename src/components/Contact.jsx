import { useState } from "react";
import { FaComment, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
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
    <section id="contact" className="py-12 px-">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Get In <span className="text-indigo-600">Touch</span>
          </h2>
          <p className="text-gray-500 mt-4 text-lg font-medium italic">
            "Let’s build something amazing together."
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Info (2 Columns) */}
          <div className="md:col-span-2 bg-indigo-900 text-white p-10 md:p-14 relative overflow-hidden group">
            <div className="relative z-10 space-y-10">
              <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
              <p className="text-indigo-200 text-lg">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              
              <div className="space-y-8">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mdabubakar.dev@gmail.com&su=Project%20Inquiry" 
  target="_blank" 
  rel="noopener noreferrer" className="flex items-center gap-5 group/item">
                  <div className="bg-indigo-800 p-4 rounded-2xl group-hover/item:bg-indigo-700 transition-colors">
                    <FaEnvelope className="text-indigo-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Email Me</p>
                    <p className="text-lg font-medium">mdabubakar.dev@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+8801773398308" className="flex items-center gap-5 group/item">
                  <div className="bg-indigo-800 p-4 rounded-2xl group-hover/item:bg-indigo-700 transition-colors">
                    <FaPhone className="text-indigo-300 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Call Me</p>
                    <p className="text-lg font-medium">+880 1773398308</p>
                  </div>
                </a>

                <a href="https://wa.me/8801773398308" target="_blank" className="flex items-center gap-5 group/item">
                  <div className="bg-green-600/20 p-4 rounded-2xl group-hover/item:bg-green-600/40 transition-colors">
                    <FaWhatsapp className="text-green-400 text-xl" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-400 uppercase tracking-widest">WhatsApp</p>
                    <p className="text-lg font-medium italic underline">Chat Live Now</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-800 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-indigo-500 rounded-full opacity-10"></div>
          </div>

          {/* Right Side: Contact Form (3 Columns) */}
          <div className="md:col-span-3 bg-white p-10 md:p-14">
            <h3 className="text-2xl font-bold mb-8 text-gray-800 flex items-center gap-3">
              <FaComment className="text-indigo-500" /> Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="Abu Bakar"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;