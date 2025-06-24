import { FaExternalLinkAlt, FaGithub, } from "react-icons/fa";

const ProjectCard = ({ name, image, github, liveLink, description, stack }) => {
   
    return (
        <div className="bg-white text-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row gap-6 p-6 transition hover:shadow-xl">
            <div className="w-full">
        <img className="w-full h-64 object-cover rounded" src={image} alt="" />
            </div>
            <div className="flex flex-col w-full justify-between space-y-4">
        <div className="flex justify-between items-center text-3xl">
            <h2>{name}</h2>
            <div className="flex gap-4">
                <a href={github} target="_blank"> <FaGithub /> </a>
                <a href={liveLink} target="_blank"> <FaExternalLinkAlt /> </a>
            </div>
        </div>
        <p className="text-xl text-gray-600">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
         {stack?.map((tech, index) => (
            <span key={index} className="bg-gray-200 text-sm text-gray-800 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
            </div>
        </div>
    );
};

export default ProjectCard;