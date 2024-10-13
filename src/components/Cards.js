import React from 'react';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';

const Cards = () => {
    return (
        <div>

            <ExperienceCard
                role="Stem Consultant"
                company="CUNY Queens College"
                duration=" Aug 2024 — Present"
                description="Conduct workshops for CSCI 111, supporting 30+ students weekly. Enhanced students' problem-solving skills through hands-on debugging and test case writing."
            />
            <ExperienceCard
                role="Coding Instructor"
                company="LogicFusion"
                duration="July 2015 — Dec 2015"
                description="Developed and maintained production code for client websites."
            />
            <ExperienceCard
                role="Software Engineering Intern"
                company="University at Buffalo"
                duration="July 2015 — Dec 2015"
                description=" Contributed to the front-end development of a gamified web application for a leadership conference. By emphasizing responsive and accessible design, I enhanced user engagement and improved overall usability."
            />



            <h2 className="text-2xl font-bold text-white mt-8">Projects</h2>
            <ProjectCard
                title="Build a Spotify Connected App"
                description="Video course that teaches how to build a web app with the Spotify Web API."
                link="https://example.com"
            />
        </div>
    );
};

export default Cards;
