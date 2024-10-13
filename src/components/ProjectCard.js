import React from 'react';

const ProjectCard = ({ title, description, link }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="mt-2">{description}</p>
            {link && <a href={link} className="text-teal-400">View Project</a>}
        </div>
    );
};

export default ProjectCard;
