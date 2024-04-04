"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Header } from "@/app/Header";
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import {TranslatingCarosel} from "@/app/TranslatingCarosel";
import { useTransform } from "framer-motion";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -8300]);

    const sectionRef = useRef<HTMLDivElement>(null); // Specify the type as HTMLDivElement
    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <main className="flex min-h-screen z-50 flex-col justify-between pt-16  ">
            <NavBar scrollToSection={scrollToSection} /> {/* use NavBar component */}
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header />
            <motion.div style={{ translateX }}>
                <TranslatingCarosel />
            </motion.div>

            <div style={{height: 2000}}>

            </div>
            {/* Your page content here. For demo, let's add a section to scroll to */}
            <div ref={sectionRef} className="mt-48">
                <h2>This is the section to scroll to</h2>
                {/* Your section content */}
            </div>
        </main>
    );
}