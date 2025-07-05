import ProjectCard from "../components/ProjectCard";
import {projects} from "../data/ProjectsData"
const Projects = () => {
    return (
       <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-indigo-600 text-center mb-8">All Project</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
    );
};

export default Projects;