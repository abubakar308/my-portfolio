import { Link } from "react-router";

const Navbar = () => {
    return (
        <div className="mx-auto">
            <nav className="flex justify-between">
                <h2><Link to="/">AB</Link></h2>
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