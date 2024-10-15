import React, { useEffect } from 'react';


const Background = () => {
    useEffect(() => {
        // Add the JS code here to run after component mounts
        const updateMousePosition = (event) => {
            const layers = document.querySelectorAll('.parallax');
            layers.forEach((layer) => {
                const speed = layer.getAttribute('data-speed');
                const x = (window.innerWidth - event.pageX * speed) / 100;
                const y = (window.innerHeight - event.pageY * speed) / 100;
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div className="background">
            <div className="parallax" data-speed="5"></div>
            <div className="parallax" data-speed="10"></div>
            <div className="parallax" data-speed="15"></div>
        </div>
    );
};

export default Background;
