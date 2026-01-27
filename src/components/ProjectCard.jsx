import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaLightbulb } from "react-icons/fa";

const ProjectCard = ({ name, image, github_client, github_server, liveLink, description, stack, challenges }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row gap-8 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            
            {/* Project Image - Increased size and added overlay effect */}
            <div className="w-full lg:w-2/5 group relative overflow-hidden rounded-lg">
                <img 
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    src={image} 
                    alt={name} 
                />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col w-full lg:w-3/5 justify-between space-y-5">
                <div>
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">{name}</h2>
                        
                        {/* Links Group */}
                        <div className="flex gap-4 items-center text-gray-500">
                            <a href={github_client} target="_blank" rel="noreferrer" title="Frontend Code" className="hover:text-indigo-600 transition-colors">
                                <div className="flex flex-col items-center gap-1">
                                    <FaCode size={20} />
                                    <span className="text-[10px] font-bold uppercase">Client</span>
                                </div>
                            </a>
                            {github_server !== "#" && (
                                <a href={github_server} target="_blank" rel="noreferrer" title="Backend Code" className="hover:text-indigo-600 transition-colors">
                                    <div className="flex flex-col items-center gap-1">
                                        <FaServer size={18} />
                                        <span className="text-[10px] font-bold uppercase">Server</span>
                                    </div>
                                </a>
                            )}
                            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>
                            <a href={liveLink} target="_blank" rel="noreferrer" title="Live Site" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                                <FaExternalLinkAlt size={22} />
                            </a>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

                    {/* Professional Challenge Section */}
                    {challenges && (
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mb-4 rounded-r-md">
                            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-1">
                                <FaLightbulb />
                                <span>Key Challenge & Solution</span>
                            </div>
                            <p className="text-sm text-amber-900 italic leading-snug">
                                {challenges}
                            </p>
                        </div>
                    )}
                </div>

                {/* Tech Stack - Using specialized pill styling */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                    {stack?.map((tech, index) => (
                        <span 
                            key={index} 
                            className="bg-slate-50 text-slate-600 border border-slate-200 text-xs font-bold px-3 py-1 rounded-md shadow-sm uppercase tracking-wider hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;