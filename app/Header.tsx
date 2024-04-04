"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {ScrollDownPrompt} from "@/app/ScrollDownPrompt";
import {ThreeDCardDemo} from "@/app/CardDemo";
import {PerspectiveImage} from "@/app/PerspectiveImage";
import {HeaderGradientAnimation} from "@/app/HeaderGradientAnimation";

export function Header() {
    return (
        <HeaderGradientAnimation className="flex flex-col items-center justify-center p-4 pt-10">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between lg:px-20 xl:px-40 2xl:px-60">

                <motion.div
                    initial={{ x: -50, rotate: -40 }}
                    animate={{ x: 0, rotate: 0 }}
                    transition={{ ease: "easeIn", duration: 1 }}
                >
                    <PerspectiveImage/>

                </motion.div>
                <div className="mt-5 md:mt-0 ml-5 md:text-left">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity:1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 1 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-7xl">Dinesh Balakrishnan</h1>
                    </motion.div>
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity:1 }}
                        exit={{ opacity: 0 }}
                        transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
                    >
                        <h2 className="text-md mt-1 text-blue-400 md:text-xl">Honors CS Student at Texas A&M University</h2>
                    </motion.div>
                </div>
            </div>
            {/* This part now follows document flow and should be positioned under the header content */}
            <ScrollDownPrompt/>
        </HeaderGradientAnimation>
    );
}