import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ScrollDownPrompt() {
    const [isVisible, setIsVisible] = useState(true);



    const arrowAnimation = {
        initial: { y: -10, opacity: 0 },
        animate: { y: [0, 10, 0], opacity: [0, 1, 0], transition: { repeat: Infinity, duration: 2 } },
    };

    return (
        <div className="mt-8 ">
            {isVisible && (
                    <motion.div {...arrowAnimation}>
                        <center>
                            <div className={"text-gray-700"}>Scroll down to learn more</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-down text-gray-500" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 1 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                            </svg>
                        </center>

                    </motion.div>
            )}
        </div>
    );
}
