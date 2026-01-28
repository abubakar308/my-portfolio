import { NavLink } from "react-router";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/ProjectsData";

const Projects = () => {
  return (
    <section className="py-12 min-h-screen">
      <div className="container mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            My <span className="text-indigo-600">Complete Portfolio</span>
          </h2>
          <p className="text-gray-500 mt-3 text-lg font-medium">
            A collection of projects built with modern technologies like React, TypeScript, and PostgreSQL.
          </p>
          <div className="w-24 h-1.5 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid - Gap barano hoyeche clarity-r jonno */}
        <div className="grid gap-12">
          {projects.map((project, i) => (
            <div key={i} className="animate-fadeIn">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Professional Footer for Projects */}
        <div className="mt-20 text-center p-10 bg-indigo-50 rounded-3xl border border-indigo-100">
          <h3 className="text-2xl font-bold text-indigo-900 mb-2">Interested in working together?</h3>
          <p className="text-indigo-700 mb-6">I'm currently available for new projects and collaborations.</p>
          <NavLink
            to="/#contact"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all inline-block"
            onClick={(e) => {
              // Jodi ekhon-i Home page-e thaken, tobe smooth scroll hobe
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
             Get In Touch
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Projects;