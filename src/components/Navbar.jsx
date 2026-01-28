import { NavLink } from "react-router";
import logo from "../assets/logo.png"
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsopen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-sm  bg-white/50 backdrop-blur-lg border-b border-gray-100 transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-2">
          {/* navbar logo */}
          <NavLink className="flex items-center text-2xl" to="/">
            <img className="w-12 h-12" src={logo} alt={logo} /><span className="-m-4">Bu Bakar</span>
          </NavLink>

          {/* navbar menu for medium and learge device */}
          <ul className="hidden md:flex gap-6 font-medium">
            <li> <NavLink to='/' className={({ isActive }) =>
              isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
            }>Home</NavLink></li>
            <li><NavLink to="/aboutme" className={({ isActive }) =>
              isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
            }>About</NavLink></li>
            <li><NavLink to='/projects' className={({ isActive }) =>
              isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
            }>Projects</NavLink></li>
          </ul>

          {/* social link */}
          <ul className="hidden md:flex items-center text-2xl gap-4">
            <li><a className="hover:text-indigo-500" href="https://www.linkedin.com/in/abubakar308" target="_blank">
              <FaLinkedin />
            </a></li>
            <li><a className="hover:text-indigo-500" href="https://github.com/abubakar308" target="_blank">
              <FaGithub />
            </a></li>
            <li> <a
              href="/Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
              download="Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
              className=" gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-100"
            >
              Download Resume
            </a></li>
          </ul>

          {/* nabvar toggle button for mobile */}
          <button onClick={() => setIsopen(!isOpen)} className="md:hidden text-2xl cursor-pointer">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* navbar menu for mobile device */}
      {
        isOpen && (
          <div className="md:hidden fixed top-12 w-full text-xl px-4 pt-4 pb-6 space-y-3 bg-white/90 backdrop-blur shadow-sm">
            <ul className="gap-6 font-medium">
              <li> <NavLink to='/' onClick={() => setIsopen(false)} className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
              }>Home</NavLink></li>
              <li><NavLink onClick={() => setIsopen(false)} to="/aboutme" className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
              }>About</NavLink></li>
              <li><NavLink onClick={() => setIsopen(false)} to='/projects' className={({ isActive }) =>
                isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
              }>Projects</NavLink></li>

            </ul>

            {/* social link */}
            <div className="text-2xl flex items-center gap-4">
              <a className="hover:text-indigo-500" href="https://www.linkedin.com/in/abubakar308" target="_blank" >
                <FaLinkedin />
              </a>
              <a className="hover:text-indigo-500" href="https://github.com/abubakar308" target="_blank">
                <FaGithub />
              </a>
              <a
                href="/Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                download="Full Stack_Developer_Resume_of_Abu Bakar Siddiquel.pdf"
                className=" gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-100"
              >
                Download Resume
              </a>
            </div>

          </div>
        )
      }
    </nav>
  );
};

export default Navbar;