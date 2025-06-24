import ProjectCard from "./ProjectCard";
import {projects} from "../data/ProjectsData"

const featuredProjects = () => {
    const featured = projects.filter(project=>project.featured)
    return (
       <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured Projects</h2>

        <div className="flex flex-wrap gap-6 justify-center">
         {featured.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/projects" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
    );
};

export default featuredProjects;