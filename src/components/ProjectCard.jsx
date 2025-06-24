import { FaExternalLinkAlt, FaGithub, } from "react-icons/fa";

const ProjectCard = ({ name, image, github, liveLink, description, stack }) => {
   
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-6 transition duration-300 hover:shadow-xl">

            {/* project image */}
            <div className="w-full">
        <img className="w-full h-64 object-cover rounded" src={image} alt={name} />
            </div>

            {/* project details */}
            <div className="flex flex-col w-full justify-between space-y-4">
        <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-indigo-700">{name}</h2>

            {/* github and live link */}
            <div className="flex gap-4 text-2xl text-gray-600">
                <a href={github} target="_blank" className="hover:text-indigo-500">  <FaGithub /> </a>
                <a href={liveLink} target="_blank" className="hover:text-indigo-500"> <FaExternalLinkAlt /> </a>
            </div>
        </div>

        {/* description */}
        <p className="text-xl text-gray-600">{description}</p>

        {/* techstack */}
        <div className="flex flex-wrap gap-2">
         {stack?.map((tech, index) => (
            <span key={index} className="bg-indigo-100 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
              {tech}
            </span>
          ))}
        </div>
            </div>
        </div>
    );
};

export default ProjectCard;