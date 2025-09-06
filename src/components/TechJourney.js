import React from "react";
import { LinkPreview } from "./ui/link-preview";

function TechJourney() {
    return (
        <div className="flex justify-center items-start h-auto flex-col px-4">
            {/* First paragraph */}
            <p className="text-slate-300 dark:text-neutral-200 text-base text-left mb-2">
                My journey into tech started with building websites and customizing my tumblr page, which grew into a deep interest in designing useful, thoughtful products. I earned a B.S. in Computer Science and completed a data analytics course, strengthening both my engineering foundations and my ability to reason with data.
            </p>

            {/* Second paragraph */}
            <p className="text-slate-300  text-base text-left mb-2">
                Throughout my journey, I've worked on various projects, including{" "}
                <LinkPreview
                    url="https://greattreads.netlify.app/"
                    imageSrc="/greatsc.png"
                    isStatic
                    className="font-bold text-teal-400 underline cursor-pointer"
                >
                    GreatReads,
                </LinkPreview>{" "}
                to see what where I explored advanced API integrations and session management.
            </p>


            {/* Fourth paragraph */}
            <p className="text-slate-300  text-base text-left mb-2">
                Outside of tech, I love reading, hiking, watching video essays, and spending quality time with
                family & friends. These activities keep me grounded and inspired, fueling my creativity in the tech world.
            </p>

            {/* Fifth paragraph */}
            <p className="text-slate-300 text-base  text-base text-left">
                Check out my{" "}
                <LinkPreview
                    url="/Muntaqa_Maahi_Resume.pdf"
                    imageSrc="/resumesc.png"  // Correct image path from public folder
                    isStatic
                    className="font-bold text-teal-400 underline cursor-pointer"
                >
                    resume
                </LinkPreview>{" "}
                to learn more about my professional journey, projects, and technical skills.
            </p>
        </div>
    );
}

export default TechJourney;
