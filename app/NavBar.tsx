import React from 'react';
import { motion } from 'framer-motion';

// @ts-ignore
export default function NavBar({scrollToSection}) {
    return (
        <nav className="fixed top-0 left-0 w-full bg-neutral-900 shadow-md z-50">
            <ul className="flex mt-2 mb-2 justify-center space-x-4">
                <li>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button onClick={scrollToSection} className={"p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700 text-gray-600"}>Go to top</button>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button onClick={scrollToSection} className={" p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700"}>Experience</button>
                    </motion.div>
                </li>
                <li>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <button onClick={scrollToSection} className={" p-3 rounded-2xl hover:bg-neutral-950 hover:text-gray-700"}>Projects</button>
                    </motion.div>
                </li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
}