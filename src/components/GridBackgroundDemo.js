import React from 'react';

export function GridBackgroundDemo() {
    return (
        <div className="fixed inset-0 min-h-screen w-full dark:bg-black bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-white/[0.2] z-[-1] pointer-events-none">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}
