import { NavLink } from "react-router";
import logo from "../assets/logo.jpg"
import { FaBars, FaFacebook, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false);
    return (
            <nav className="shadow-m bg-white rounded-2xl my-2 fixed w-full">
               <div className="flex justify-between container mx-auto items-center px-4 sm:px-6 lg:px-8">

                 {/* navbar logo */}
                <NavLink to="/">
                <img className="w-16 h-16" src={logo} alt={logo} />
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
               <ul className="hidden md:flex text-2xl gap-4">
                <li><a className="hover:text-indigo-500" href="https://www.linkedin.com/in/abubakar308" target="_blank">
                <FaLinkedin />
                </a></li>
                <li><a className="hover:text-indigo-500" href="https://github.com/abubakar308" target="_blank">
                <FaGithub />
                </a></li>
                <li> <a className="hover:text-indigo-500" href="https://www.facebook.com/mdabubakar308" target="_blank">
                    <FaFacebook />
                </a></li>
               </ul>

               {/* nabvar toggle button for mobile */}
  <button onClick={()=>setIsopen(!isOpen)} className="md:hidden text-2xl cursor-pointer">
               {isOpen ? <FaTimes /> : <FaBars />}
            </button>
               </div>

               {/* navbar menu for mobile device */}
               {
                isOpen && (
                    <div className="md:hidden fixed top-16 w-full rounded-xl text-xl px-4 pt-4 pb-6 space-y-3 bg-gray-300 shadow">
                         <ul className="gap-6 font-medium">
                          <li> <NavLink to='/' onClick={()=>setIsopen(false)} className={({ isActive }) =>
    isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
  }>Home</NavLink></li>
                    <li><NavLink onClick={()=>setIsopen(false)} to="/aboutme" className={({ isActive }) =>
    isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
  }>About</NavLink></li>
                    <li><NavLink onClick={()=>setIsopen(false)} to='/projects' className={({ isActive }) =>
    isActive ? "text-indigo-600 font-bold" : "hover:text-indigo-600"
  }>Projects</NavLink></li>
                   
                </ul>

                {/* social link */}
               <div className="text-2xl flex gap-4">
                <a className="hover:text-indigo-500" href="https://www.linkedin.com/in/abubakar308" target="_blank" >
                <FaLinkedin />
                </a>
                <a className="hover:text-indigo-500" href="https://github.com/abubakar308" target="_blank">
                <FaGithub />
                </a>
                <a className="hover:text-indigo-500" href="https://www.facebook.com/mdabubakar308" target="_blank">
                    <FaFacebook />
                </a>
               </div>

                    </div>
                )
               }
            </nav>
    );
};

export default Navbar;