import { Link } from "react-router";

const AboutPreview = ({ShowButton = true}) => {
    return (
        <div className="">
            <h2 className="text-center text-3xl font-semibold">About Me</h2>
            {/* Intro */}
    <p className="mb-6 text-lg leading-relaxed">
      Hi, I'm <span className="text-blue-400 font-semibold">Md Abu Bakar Siddique</span>, a passionate
          <span className="text-blue-400 font-semibold"> Full Stack Web Developer</span>.  
          I thrive on tackling complex problems and continuously learning new technologies to build scalable, user-friendly applications.
    </p>

    <p> I love building <strong>real-world projects</strong> that make an impact—from
          <strong> e-commerce platforms</strong> to <strong>online learning tools</strong> and <strong>career counseling websites</strong>.
          My goal is to create applications that are not just functional but also **visually appealing** and **accessible to all users**.</p>

        {
            ShowButton && (
                          <div className="mt-8 text-center">
          <Link to="/aboutMe" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            View More
          </Link>
        </div>
            )
        }
          
           </div>
    );
};

export default AboutPreview;