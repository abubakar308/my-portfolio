import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="container mx-auto px-4 py-10 gap-6">

           <div className="flex flex-col md:flex-row justify-around items-center gap-6">

            {/* Column 1: Personal Info */}
        <div className="space-y-2 text-sm">
          <h3 className="text-lg font-bold text-indigo-500">Md Abu Bakar Siddique</h3>
          <p>A passionate MERN stack web developer.</p>
          <p> Dhaka, Bangladesh</p>
          <p>
            <a
              href="mailto:mdabubakar.dev@gmail.com"
              className="hover:text-indigo-400 transition"
            >
              mdabubakar.dev@gmail.com
            </a>
          </p>
        </div>
        
             {/* menu links */}
            <div className="text-sm font-medium space-y-2">
                <h3 className="text-lg  text-indigo-500 font-semibold mb-1">Menu</h3>
                 <Link to='/' className="block hover:text-indigo-300 transition">Home</Link>
                <Link to="/aboutme" className="block hover:text-indigo-300 transition">About</Link>
                 <Link to='/projects' className="block hover:text-indigo-300 transition">Projects</Link>
            </div>

            {/* social links */}
            <div className="text-lg flex flex-col font-medium gap-2">
                <h3 className="font-semibold text-indigo-500 mb-1">Social</h3>
                <a className="hover:text-indigo-400 transition" href="https://www.linkedin.com/in/abubakar308" target="_blank" >
                                <FaLinkedin />
                                </a>
                                <a className="hover:text-indigo-400 transition" href="https://github.com/abubakar308" target="_blank">
                                <FaGithub />
                                </a>
                                <a href="https://www.facebook.com/mdabubakar308" target="_blank">
                    <FaFacebook />
                </a>
            </div>
           </div>

            <div className="text-center text-sm text-gray-600 mt-6">
        © {new Date().getFullYear()} Md Abu Bakar Siddique. All rights reserved.
      </div>

        </div>
    );
};

export default Footer;