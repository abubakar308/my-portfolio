import ProjectCard from "../components/ProjectCard";
import {projects} from "../data/ProjectsData"
const Projects = () => {
    return (
       <section className="py-12 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">All Project</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
    );
};

export default Projects;