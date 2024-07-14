import React from 'react';
import { motion } from 'framer-motion';

// @ts-ignore
export default function NavBar({ scrollToTop, scrollToExperience, scrollToProjects, showBackToHome}) {

    const navigateToHome = () => {
        window.location.href = "/";
    }
    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50">
            <ul className="flex mt-2 mb-2 justify-center space-x-4">
                {scrollToTop ?
                <li>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button onClick={scrollToTop} className={"p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700 text-gray-600"}>Go to top</button>
                    </motion.div>
                </li>
                    : null}
                {scrollToExperience ?
                <li>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button onClick={scrollToExperience} className={" p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700"}>Experience</button>
                    </motion.div>
                </li>
                : null}
                {scrollToProjects ?
                <li>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button onClick={scrollToProjects} className={" p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700"}>Projects</button>
                    </motion.div>
                </li>
                    : null}
                {showBackToHome ?
                <li>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <a href={"/"}>
                            <button className={" p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700"}>Back to Home</button>
                        </a>
                    </motion.div>
                </li>
                    : null}
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
}