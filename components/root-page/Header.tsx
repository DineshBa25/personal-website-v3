"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {ScrollDownPrompt} from "@/components/ui/ScrollDownPrompt";
import {PerspectiveImage} from "@/components/root-page/PerspectiveImage";
import {HeaderGradientAnimation} from "@/components/ui/HeaderGradientAnimation";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowsUpToLine, faDownload} from "@fortawesome/free-solid-svg-icons";
import {fab, faGithub, faLinkedin, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

export function Header() {
    return (
        <HeaderGradientAnimation className="flex flex-col items-center justify-center p-4 pt-20">
            <div className="flex flex-col mb-5 justify-center items-center md:flex-row md:justify-between lg:px-20 xl:px-40 2xl:px-60">

                <PerspectiveImage/>
                <div className="mt-5 md:mt-0 mx-10 md:text-left">
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl text-white lg:text-7xl">Dinesh Balakrishnan</h1>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity:1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
                    >
                        <h2 className="text-md mt-1 text-blue-400 md:text-xl">Honors CS Student at Texas A&M University</h2>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 1, delay: 2 }}
                        className="mt-5 flex space-x-4"
                    >
                        <a href="https://github.com/dineshba25" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-500">
                            <FontAwesomeIcon icon={faGithub}size={"2xl"}/>
                        </a>
                        <a href="https://www.linkedin.com/in/dineshba25" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            <FontAwesomeIcon icon={faLinkedin} size={"2xl"}/>
                        </a>
                        <a href="/documents/Dinesh%20Balakrishnans%20Resume%20%20v2.0.3-%20Summer%202024%20(15).pdf" download className="text-red-500 hover:text-red-700">
                            <FontAwesomeIcon icon={faDownload} size={"2xl"} className={"mr-2"}/>
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>
        </HeaderGradientAnimation>
    );
}
