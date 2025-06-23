import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="container mx-auto px-4 py-10 gap-6">

           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
             {/* menu links */}
            <div className="text-sm font-medium space-y-2">
                <h3 className="text-lg font-semibold text-white mb-1">Menu</h3>
                <Link to="/aboutme" className="block hover:text-white transition">About</Link>
                 <Link to='/projects' className="block hover:text-white transition">Projects</Link>
                 <Link to='/blogs' className="block hover:text-white transition">Blogs</Link>
            </div>

            {/* social links */}
            <div className="text-sm font-medium space-y-2">
                <h3 className="text-lg font-semibold text-white mb-1">social</h3>
                <a className="hover:text-indigo-400 transition" href="https://www.linkedin.com/in/abubakar308" target="_blank" >
                                <FaLinkedin />
                                </a>
                                <a className="hover:text-indigo-400 transition" href="https://github.com/abubakar308" target="_blank">
                                <FaGithub />
                                </a>
                                <a href="" target="_blank"></a>
            </div>
           </div>

            <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} Md Abu Bakar Siddique. All rights reserved.
      </div>

        </div>
    );
};

export default Footer;