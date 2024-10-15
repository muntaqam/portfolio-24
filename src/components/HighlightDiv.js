import React from 'react';
import { useState, useEffect } from 'react';
import { BackgroundLines } from './ui/background-lines';  // Ensure the import path is correct
import SocialLinks from './SocialLinks';

function HighlightDiv() {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = ['about', 'experience', 'projects'];
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Adjust for how much of the section needs to be visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                } else {
                    if (entry.target.id === activeSection) {
                        setActiveSection(''); // Reset when scrolling out
                    }
                }
            });
        }, options);

        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [activeSection]);

    return (
        <div className="relative p-0 h-auto lg:flex lg:flex-col lg:justify-between lg:space-y-4">

            {/* Name Section */}
            <div className="relative flex  items-center">
                {/* Background Lines directly behind Muntaqa Maahi */}
                <BackgroundLines className="absolute z-0 opacity-80 w-[300px] h-[350px] top-[-30px]" svgOptions={{ duration: 10 }} />

                {/* Muntaqa Maahi Text */}
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        <a href="/">Muntaqa Maahi</a>
                    </h1>
                    <h2 className="mt-1 text-lg font-medium tracking-tight text-slate-100 sm:text-xl">
                        Software Engineer
                    </h2>
                </div>
            </div>

            {/* Description */}
            <p className="mt-2 max-w-xs leading-normal text-slate-500">
                Transforming ideas into solutions through hands-on projects.
            </p>

            {/* Navigation Links */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-4 w-max">
                    {['About', 'Experience', 'Projects'].map((item) => (
                        <li key={item}>
                            <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                                <span className={`nav-indicator mr-4 h-px transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-16 bg-slate-200' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'} group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                                <span className={`nav-text text-xs font-bold uppercase tracking-widest ${activeSection === item.toLowerCase() ? 'text-slate-200' : 'text-slate-500'} group-hover:text-slate-200 group-focus-visible:text-slate-200`}>
                                    {item}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Social Links */}
            <SocialLinks />
        </div>
    );
}

export default HighlightDiv;
