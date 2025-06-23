import { NavLink } from "react-router";
import logo from "../assets/logo.jpg"
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);
    return (
            <nav className="shadow-md bg-white sticky top-0 z-50">
               <div className="flex justify-between container mx-auto items-center px-4 sm:px-6 lg:px-8">
                 {/* navbar logo */}
                <NavLink to="/">
                <img className="w-14 h-14" src={logo} alt={logo} />
                </NavLink>

                {/* navbar menu for medium and learge device */}
                <ul className="hidden md:flex gap-6 font-medium">
                    <li><NavLink to="/aboutme" className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>About</NavLink></li>
                    <li><NavLink to='/projects' className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>Projects</NavLink></li>
                   <li> <NavLink className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>Blogs</NavLink></li>
                </ul>

                {/* social link */}
               <ul className="hidden md:flex text-2xl gap-4">
                <li><a href="https://www.linkedin.com/in/abubakar308" target="_blank">
                <FaLinkedin />
                </a></li>
                <li><a href="https://github.com/abubakar308" target="_blank">
                <FaGithub />
                </a></li>
                <li><a href="" target="_blank"></a></li>
               </ul>
  <button onClick={()=>setIsopen(!isOpen)} className="md:hidden text-2xl">
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
               </div>
               {/* navbar menu for mobile device */}
              
               
               {
                isOpen && (
                    <div className="md:hidden px-4 pt-4 pb-6 space-y-3 bg-white shadow">
                         <ul className="gap-6 font-medium">
                    <li><NavLink onClick={()=>setIsopen(false)} to="/aboutme" className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>About</NavLink></li>
                    <li><NavLink onClick={()=>setIsopen(false)} to='/projects' className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>Projects</NavLink></li>
                   <li> <NavLink onClick={()=>setIsopen(false)} className={({ isActive }) =>
    isActive ? "text-indigo-500 font-bold" : "hover:text-indigo-500"
  }>Blogs</NavLink></li>
                </ul>

                {/* social link */}
               <div className="text-2xl flex gap-4">
                <a href="https://www.linkedin.com/in/abubakar308" target="_blank">
                <FaLinkedin />
                </a>
                <a href="https://github.com/abubakar308" target="_blank">
                <FaGithub />
                </a>
                <a href="" target="_blank"></a>
               </div>

                    </div>
                )
               }
            </nav>
    );
};

export default Navbar;