import React from "react";
import { LinkPreview } from "./ui/link-preview";

function TechJourney() {
    return (
        <div className="flex justify-center items-start h-auto flex-col px-4">
            {/* First paragraph */}
            <p className="text-slate-300 dark:text-neutral-200 text-base text-left mb-2">
                My journey into tech began with crafting websites on Wix and customizing
                backgrounds on Tumblr, sparked by my fascination after watching a Steve Jobs movie.
                I've always had a passion for technology, enjoying the thrill of experimenting with anything
                electronic that I could get my hands on.
            </p>

            {/* Second paragraph */}
            <p className="text-slate-300  text-base text-left mb-2">
                Throughout my journey, I've worked on various projects, including{" "}
                <LinkPreview
                    url="https://greattreads.netlify.app/"
                    imageSrc="/greatsc.png"
                    isStatic
                    className="font-bold text-teal-400 underline"
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
                    className="font-bold text-teal-400 underline"
                >
                    resume
                </LinkPreview>{" "}
                to learn more about my professional journey, projects, and technical skills.
            </p>
        </div>
    );
}

export default TechJourney;
