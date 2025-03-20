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
import SalesForecaster from '../images/SalesForecaster.png'
import HIMYM from '../images/Himym.png'
const Cards = () => {
    return (
        <div>
            <section id="experience" class="mt-[7.5rem] md:mt-[7.5rem] lg:mt-0 mb-10">
                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-[1rem] ">Experience</h2>


                <ExperienceCard
                    role="Stem Consultant"
                    company="CUNY Queens College"
                    duration=" Aug 2024 — Present"
                    description="Lead recitations for CSE111 and CSE211 and manage the STEM Center, supporting students in debugging, algorithms, and problem-solving."
                />
                <ExperienceCard
                    role="Software Engineering Intern"
                    company="University at Buffalo"
                    duration="Aug 2022 — Feb 2023"
                    description="Contributed to the front-end development of a responsive, accessible gamified web app using HTML, CSS, and JavaScript for the annual UB leadership conference."
                />
                <ExperienceCard
                    role="Coding Instructor"
                    company="LogicFusion"
                    duration="Jan 2020 — Mar 2022"
                    description="Taught game development with Pygame and GameMaker Studio 2.0, focusing on coding fundamentals and project-based learning."
                />


                <a
                    href="/Muntaqa_Maahi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 mb-2 inline-flex items-center text-white font-bold text-sm hover:text-teal-400"
                >
                    View Full Résumé
                    <span className="ml-2 transform transition-transform duration-300 ease-out group-hover:-translate-y-1">
                        ↗
                    </span>
                </a>

            </section>


            <section id="projects" className='pb-20'>
                {/* Title */}
                <h2 className="text-2xl font-bold text-white text-center mb-8">My Projects</h2>
                <ProjectCard
                    title="GreatReads"
                    description="A Goodreads clone that allows users to find and track their favorite books."
                    link="https://greattreads.netlify.app/"
                    skills={["React", "Next.js", "TailwindCSS", "Supabase"]}
                    imageSrc={GreatReadsImage}
                />

                <ProjectCard
                    title="TumblyTube"
                    description="A video-sharing platform similar to YouTube."
                    link="https://tumblytube-production.up.railway.app/#/"
                    skills={["React", "Node.js", "Express", "MongoDB"]}
                    imageSrc={TumblyTubeImage}
                />

                <ProjectCard
                    title="Sales Forecast ETL"
                    description="An ETL pipeline that extracts, transforms, and loads sales data to forecast future product performance."
                    link="https://github.com/muntaqam/Sales_forecast_ETL"
                    skills={["Python", "Pandas", "AWS S3", "Machine Learning"]}
                    imageSrc={SalesForecaster}
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
                    title="HIMYM Transcript Scraper"
                    description="A Python script that scrapes and compiles transcripts from the TV show How I Met Your Mother for data analysis and NLP tasks."
                    link="https://github.com/muntaqam/HIMYM_transcript_scraper"
                    skills={["Python", "Web Scraping", "BeautifulSoup", "NLP"]}
                    imageSrc={HIMYM}
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
                    title="Netflix Clone"
                    description="A clone of the Home Page of the Netflix platform for streaming movies and shows."
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
            </section >

        </div >



    );
};

export default Cards;
