import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-100 pt-12 pb-8">
            <div className="container mx-auto px-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Column 1: Personal Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-indigo-600">Md Abu Bakar Siddique</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A passionate Full Stack Developer specializing in building scalable web applications with MERN & TypeScript.
                        </p>
                        <div className="space-y-2 text-gray-500">
                            <p className="flex items-center justify-center md:justify-start gap-2 italic">
                                <FaMapMarkerAlt className="text-indigo-500" /> Dhaka, Bangladesh
                            </p>
                            <a href="mailto:mdabubakar.dev@gmail.com" className="flex items-center justify-center md:justify-start gap-2 hover:text-indigo-600 transition">
                                <FaEnvelope className="text-indigo-500" /> mdabubakar.dev@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
                        <nav className="flex flex-col space-y-2 font-medium text-gray-600">
                            <Link to='/' className="hover:text-indigo-600 transition">Home</Link>
                            <Link to="/aboutme" className="hover:text-indigo-600 transition">About Me</Link>
                            <Link to='/projects' className="hover:text-indigo-600 transition">Projects Portfolio</Link>
                            <NavLink to="/#contact" className="hover:text-indigo-600 transition">Contact Me</NavLink>
                        </nav>
                    </div>

                    {/* Column 3: Social Connectivity */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-gray-800">Connect With Me</h3>
                        <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-600">
                            <a className="hover:text-indigo-600 transition transform hover:-translate-y-1" href="https://www.linkedin.com/in/abubakar308" target="_blank">
                                <FaLinkedin />
                            </a>
                            <a className="hover:text-indigo-600 transition transform hover:-translate-y-1" href="https://github.com/abubakar308" target="_blank">
                                <FaGithub />
                            </a>
                            <a className="hover:text-indigo-600 transition transform hover:-translate-y-1" href="https://www.facebook.com/mdabubakar308" target="_blank">
                                <FaFacebook />
                            </a>
                        </div>
                        <p className="text-sm text-gray-500 pt-2">Let's build something amazing together.</p>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Md Abu Bakar Siddique. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;