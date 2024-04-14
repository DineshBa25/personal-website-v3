import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView

export function ProjectsHeader() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.5, // Trigger when 50% of the header is in view
    });

    // Animation variants
    const headerVariants = {
        visible: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 1 } },
        hidden: { y: -20, opacity: 0 },
    };

    return (
        <div className="flex flex-col items-center justify-center p-4 pt-10" ref={ref}>
            {/* Conditional animation based on inView */}
            <motion.div
                variants={headerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="flex flex-col w-full items-center justify-center text-center lg:px-20 xl:px-40 2xl:px-60"
            >
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-blue-700 font-bold tracking-tight">Project Showcase</h1>
                <div className="w-full h-1 my-5 bg-gradient-to-l from-transparent via-blue-700 to-transparent" />
            </motion.div>


        </div>
    );
}
