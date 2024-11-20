import React from 'react';

const ExperienceCard = ({ role, company, duration, description }) => {
    return (

        
        <div className="flex space-x-4 text-white p-4 rounded-lg shadow-md mb-4 hover:bg-slate-800/50 transition duration-300 cursor-pointer group ">

            <div className="w-1/3 mt-2">
                <p className="text-xs text-gray-400 pl-5 ">{duration}</p>
            </div>
            <div className="w-2/3  mt-1 ">
                <h3 className="text-lg font-bold group-hover:text-teal-300 ">
                    {role} @ {company}
                </h3>
                <p className="text-xs text-slate-500 mt-2 h-12 overflow-hidden">{description}</p>
            </div>

        </div>


    );
};

export default ExperienceCard;
