import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollDownPrompt() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY === 0);
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and clean up on unmount

    const arrowAnimation = {
        initial: { y: -10, opacity: 0 },
        animate: { y: [0, 10, 0], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 2 } },
    };

    return (
        <div style={{ position: 'fixed', zIndex: 1000, bottom: 50, left: "50%", transform: "translateX(-50%)" }}>
            {isVisible && (
                <motion.div {...arrowAnimation}>
                    <center>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-arrow-down text-gray-500" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                        </svg>
                    </center>
                </motion.div>
            )}
        </div>
    );
}