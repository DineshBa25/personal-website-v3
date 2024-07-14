"use client";
import React from 'react';
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { useAnimation } from 'framer-motion';
import { ProjectHeader } from '@/app/ProjectHeader';
import ImageGallery from "react-image-gallery";
import ProjectInfo from "@/app/ProjectInfo";
import ProjectLongDescription from "@/app/ProjectLongDescription";

type ProjectPageProps = {
    images: any;
    longDescription: string;
    shortDescription: string;
    title: string;
    tags: string[];
    githubLink: string;
    contributors: number;
    linesOfCode: string;
};
const ProjectPage: React.FC<ProjectPageProps> = ({ images, longDescription, shortDescription, title, tags, githubLink, contributors, linesOfCode }) => {
    const controls = useAnimation();

    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -8300]);

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
            <ProjectHeader name={title} shortDescription={shortDescription}/>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-1 pt-5"}>
                <div className={"p-4"}>
                    <ImageGallery items={images}/>
                  {
                        images.forEach((item: any) => {
                        return <p>{item}</p>
                        })
                    }
                </div>
                <div className={"p-4"}>
                    <ProjectLongDescription
                        description={longDescription}
                    />
                    <ProjectInfo
                        tags={tags}
                        githubLink={githubLink? githubLink : ""}
                        contributors={contributors? contributors : 0}
                        linesOfCode={linesOfCode? linesOfCode : "0"}
                    />
                </div>
            </div>
        </motion.main>
    );
}

export default ProjectPage;