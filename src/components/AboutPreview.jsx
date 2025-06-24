import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const AboutPreview = ({showButton = true}) => {
    return (
        <div className="">
            <h2 className="text-center text-3xl text-indigo-600 font-semibold mb-6">About Me</h2>
            {/* Intro */}
    <p className="mb-4 text-lg">
      Hi, I'm <span className="text-indigo-500 font-semibold">Md Abu Bakar Siddique</span>, a passionate
          <span className="text-indigo-500 font-semibold"> Full Stack Web Developer</span>.  
          I thrive on tackling complex problems and continuously learning new technologies to build scalable, user-friendly applications.
    </p>
    <h2 className="text-xl text-indigo-500 mb-4 mt-2">My Passion</h2>

    <p> I love building <strong>real-world projects</strong> that make an impact—from
          <strong> e-commerce platforms</strong> to <strong>online learning tools</strong> and <strong>career counseling websites</strong>.
          My goal is to create applications that are not just functional but also visually appealing and accessible to all users.</p>

        {
            showButton && (
                          <div className="mt-4 text-center">
        <Link to="/aboutMe" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
  View More <FaArrowRight />
</Link>
        </div>
            )
        }
          
           </div>
    );
};

export default AboutPreview;