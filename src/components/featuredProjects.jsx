import ProjectCard from "./ProjectCard";
import { projects } from "../data/ProjectsData";
import { Link } from "react-router";

const FeaturedProjects = () => {
    const featured = projects.filter(project => project.featured);

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 w-full">
                {/* Section Header with Indigo Accent */}
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
                        Featured <span className="text-indigo-600">Projects</span>
                    </h2>
                    <p className="text-gray-500 font-medium">Some of my best work using MERN, TypeScript & PostgreSQL</p>
                </div>

                {/* Grid Layout - Gap barano hoyeche visual clarity-r jonno */}
                <div className="grid grid-cols-1 gap-10">
                    {featured.map((project, i) => (
                        <div key={i} className="transform transition-all duration-500 hover:-translate-y-2">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                {/* CTA Button - Updated to match your Navbar/Hero style */}
                <div className="mt-16 text-center">
                    <Link 
                        to="/projects" 
                        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200 transition-all duration-300 transform hover:scale-105"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;