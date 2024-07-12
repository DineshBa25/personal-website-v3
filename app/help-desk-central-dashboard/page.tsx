"use client";
import React from 'react';
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useAnimation } from 'framer-motion';
import { ProjectHeader } from '../ProjectHeader';

export default function Home() {
    const controls = useAnimation();

    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -8300]);

    const images = [
        {
            original: "/app-images/hdc-dashboard/hdc-dashboard-warning-dem.gif",
            thumbnail: "/app-images/hdc-dashboard/hdc-dashboard.png",
        },
        {
            original: "/app-images/hdc-dashboard/hdc-dashboard-dark-mode.png",
            thumbnail: "/app-images/hdc-dashboard/hdc-dashboard-dark-mode.png",
        },
        {
            original: "/app-images/hdc-dashboard/hdc-dashboard-light-mode.png",
            thumbnail: "/app-images/hdc-dashboard/hdc-dashboard-light-mode.png",
        }
    ];

    // @ts-ignore
    return (
        <motion.main
            animate={controls}
            initial={{ backgroundColor: 'rgba(0,0,0,0.46)' }}
            className="overflow-x-hidden mt-8"
        >
            <NavBar scrollToTop={undefined} scrollToExperience={undefined} scrollToProjects={undefined} showBackToHome={true}/>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <ProjectHeader name={"Help Desk Central Dashboard"} shortDescription={"Custom built agent call queue, and metrics dashboard for TAMU Technology Services"} images={images} longDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante non metus facilisis venenatis. Curabitur vel ipsum vel. Nulla facilisi. Sed euismod, turpis id maximus dapibus, velit dolor elementum risus, in porta magna dolor sit amet mi. Proin sed orci rutrum, dignissim ipsum convallis, feugiat risus. Nulla malesuada mauris nec enim placerat, at elementum urna blandit. Integer vitae lectus nisl. Donec."}/>
        </motion.main>
    );
}