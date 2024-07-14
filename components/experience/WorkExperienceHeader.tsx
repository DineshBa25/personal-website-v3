import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export function WorkExperienceHeader() {
    const { scrollYProgress } = useViewportScroll();

    // Calculate the opacity based on the scroll position
    // Fades in towards the middle of the page and fades out towards the edges
    const opacity = useTransform(scrollYProgress, [0.0, 0.5, 1], [0.35, 1, 0]);

    return (
        <div className="flex flex-col items-center justify-center p-4 pt-10">
            {/* Animated Divider */}


            <div className="flex flex-col mb-5 justify-center items-center md:flex-row md:justify-between lg:px-20 xl:px-40 2xl:px-60">
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-purple-500 font-bold tracking-tight">Work Experience</h1>
                </motion.div>
            </div>
            <motion.div
                className="w-full h-1 mb-5"
                style={{
                    opacity, // Apply the dynamic opacity based on scroll position
                    background: "linear-gradient(to left, transparent, #9f7aea, transparent)",
                }}
            />
        </div>
    );
}
