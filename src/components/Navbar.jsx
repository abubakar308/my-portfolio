import { Link } from "react-router";
import logo from "../assets/logo.jpg"

const Navbar = () => {
    return (
        <div className="mx-auto">
            <nav className="flex justify-between">
                <Link to="/">
                <img className="w-14 h-14" src={logo} alt="A" />
                </Link>
                <ul className="flex gap-2">
                    <Link to="/aboutme">About Me</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link>Blogs</Link>
                </ul>
               <ul className="flex gap-2">
                <li><a href="https://www.linkedin.com/in/abubakar308" target="_blank">Linkedin</a></li>
                <li><a href="https://github.com/abubakar308" target="_blank">Github</a></li>
                <li><a href="" target="_blank"></a></li>
               </ul>
            </nav>
        </div>
    );
};

export default Navbar;