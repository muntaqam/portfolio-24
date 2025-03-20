import React from 'react';

const ProjectCard = ({ title, description, link, skills, imageSrc }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
        >
            <div className="flex space-x-4 text-white p-4 rounded-lg shadow-md mb-4 hover:bg-slate-800/50 transition duration-300 cursor-pointer group">
                <div className="w-1/3 mt-2">
                    {imageSrc && <img src={imageSrc} alt={title} className="w-full aspect-[16/9] bg-[#1a1a1a] rounded mb-2 overflow-hidden" />}
                </div>
                <div className="w-2/3 mt-1">
                    <h3 className="text-lg font-bold group-hover:text-teal-300 flex items-center">
                        {title}
                        <span className="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-1">↗</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 h-12 overflow-hidden">{description}</p>
                    <div className="mt-2 flex flex-wrap">
                        {skills.map((skill, index) => (
                            <span key={index} className="bg-teal-700/25 text-teal-300 text-xs font-light rounded-full px-2 py-1 mr-2 mb-2">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
