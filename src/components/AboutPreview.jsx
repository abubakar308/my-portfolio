import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const AboutPreview = ({showButton = true}) => {
    return (
        <div className="container mx-auto px-4 md:px-0">
            <h2 className="text-center text-3xl text-indigo-600 font-bold mb-8">About Me</h2>
            
            {/* Intro */}
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Hi, I'm <span className="text-indigo-600 font-bold">Md Abu Bakar Siddique</span>, a dedicated 
                <span className="text-indigo-600 font-bold"> Full Stack Developer</span> specializing in the 
                <span className="font-semibold"> MERN Stack & TypeScript</span>. 
                With a strong foundation in <span className="font-semibold text-indigo-500">PostgreSQL and Prisma</span>, 
                I focus on architecting scalable backend systems and high-performance user interfaces.
            </p>

            <h3 className="text-2xl text-indigo-500 font-semibold mb-4 mt-6">Expertise & Vision</h3>

            <p className="text-lg leading-relaxed text-gray-700">
                I specialize in building <strong>enterprise-grade applications</strong>, such as 
                <strong> Certificate Management Systems</strong> and <strong>E-commerce platforms</strong>. 
                I am particularly skilled in implementing <strong>role-based access control (RBAC)</strong> and 
                multi-step approval workflows that solve real-world organizational challenges. 
                My goal is to deliver clean, maintainable code that creates seamless digital experiences.
            </p>

            {
                showButton && (
                    <div className="mt-8 text-center">
                        <Link to="/aboutMe" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200 transform hover:-translate-y-1">
                            Explore My Journey <FaArrowRight />
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default AboutPreview;