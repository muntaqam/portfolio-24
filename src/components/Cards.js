import React from 'react';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import GreatReadsImage from '../images/GreatReads.png';
import RoadWeatherImage from '../images/RoadWeather.png'
import FoodleImage from '../images/Foodle.png'
import TumblyTubeImage from '../images/TumblyTube.png'
import BubbleSortImage from '../images/BubbleSort.png'
import PomodoroImage from '../images/Pomodoro.png'
import ImageStitch from '../images/ImageStitch.png'
import NetflixClone from '../images/Netflix.png'

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

            <a href="#" class="group  mt-2 mb-24 inline-flex items-center text-white font-bold text-sm hover:text-teal-400">
                View Full Résumé
                <span class="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-1">↗</span>
            </a>





            <ProjectCard
                title="GreatReads"
                description="A Goodreads clone that allows users to find and track their favorite books."
                link="https://greattreads.netlify.app/"
                skills={["React", "Next.js", "TailwindCSS", "Supabase"]}
                imageSrc={GreatReadsImage}
            />

            <ProjectCard
                title="Road Weather"
                description="An app providing real-time weather forecasts for road trips."
                link="https://github.com/muntaqam/RoadWeather2.0"
                skills={["React Native", "WeatherStack API", "Google Maps API"]}
                imageSrc={RoadWeatherImage}
            />

            <ProjectCard
                title="Foodle"
                description="A web-based game that allows users to guess a five-letter word."
                link="https://foodwordle.netlify.app/"
                skills={["React", "JavaScript", "CSS"]}
                imageSrc={FoodleImage}
            />

            <ProjectCard
                title="Image Processing"
                description="A project focusing on basic image manipulation techniques."
                link="https://github.com/muntaqam/ImageProcessing"
                skills={["Python", "OpenCV", "Image Processing"]}
                imageSrc={ImageStitch}
            />

            <ProjectCard
                title="Bubble Sort Visualizer"
                description="A tool for visualizing the Bubble Sort algorithm in real-time."
                link="https://bubblesortvisualization.netlify.app/"
                skills={["React", "D3.js", "JavaScript"]}
                imageSrc={BubbleSortImage}
            />

            <ProjectCard
                title="TumblyTube"
                description="A video-sharing platform similar to YouTube."
                link="https://github.com/muntaqam/TumblyTube"
                skills={["React", "Node.js", "Express", "MongoDB"]}
                imageSrc={TumblyTubeImage}
            />

            <ProjectCard
                title="Netflix Clone"
                description="A clone of the Netflix platform for streaming movies and shows."
                link="https://meek-belekoy-24182b.netlify.app/"
                skills={["React", "Firebase", "CSS"]}
                imageSrc={NetflixClone}
            />

            <ProjectCard
                title="Pomodoro Timer"
                description="A productivity app that uses the Pomodoro technique to manage work sessions."
                link="https://github.com/muntaqam/pomodoro"
                skills={["React", "JavaScript", "CSS"]}
                imageSrc={PomodoroImage}
            />

        </div>

    );
};

export default Cards;
