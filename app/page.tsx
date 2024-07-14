"use client";
import React, {useRef, useState} from 'react';
import { Header } from "@/app/Header";
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import {TranslatingCarosel} from "@/app/TranslatingCarosel";
import { useTransform } from "framer-motion";
import { WorkExperienceCard } from '../components/experience/WorkExperienceCard';
import {WorkExperienceHeader} from "@/components/experience/WorkExperienceHeader";
import {ScrollDownPrompt} from "@/app/ScrollDownPrompt";
import {ProjectsHeader} from "@/app/ProjectsHeader";
import ProjectCard from "@/components/projectCard";
import { useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';
import experience from '@/public/information/experience.json';
import projects from '@/public/information/projects.json';
import {Footer} from "@/app/Footer";
export default function Home() {
    const controls = useAnimation();

    const topRef = useRef<HTMLDivElement>(null);
    const projectHeaderRef =  useRef<HTMLDivElement>(null);
    const experienceHeaderRef =  useRef<HTMLDivElement>(null);

    const [isTopVisible, setTopVisible] = useState(false);
    const [isProjectHeaderVisible, setProjectHeaderVisible] = useState(false);
    const [isExperienceHeaderVisible, setExperienceHeaderVisible] = useState(false);


    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -8300]);

    const scrollToWithOffset = (ref: { current: { getBoundingClientRect: () => { (): any; new(): any; top: number; }; }; }, offset: number) => {
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };
    const sectionRef = useRef<HTMLDivElement>(null); // Specify the type as HTMLDivElement
    const scrollToProjects = () => {
        // @ts-ignore
        scrollToWithOffset(projectHeaderRef, 75)
    };

    const scrollToExperience = () => {
        // @ts-ignore
        scrollToWithOffset(experienceHeaderRef, 75);
    }

    const scrollToTop= () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const callback = (entries: any[], observer: any) => {
            entries.forEach(entry => {
                const { target, isIntersecting } = entry;
                if (target === topRef.current) {
                    setTopVisible(isIntersecting);
                } else if (target === projectHeaderRef.current) {
                    setProjectHeaderVisible(isIntersecting);
                } else if (target === experienceHeaderRef.current) {
                    setExperienceHeaderVisible(isIntersecting);
                }
            });
        };

        const observer = new IntersectionObserver(callback, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5  // Adjust threshold as needed
        });

        if (topRef.current) observer.observe(topRef.current);
        if (projectHeaderRef.current) observer.observe(projectHeaderRef.current);
        if (experienceHeaderRef.current) observer.observe(experienceHeaderRef.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isTopVisible) {
            controls.start({ backgroundColor: 'rgba(0,0,0,0.46)', transition: { duration: 1 } });
        } else if (isProjectHeaderVisible) {
            controls.start({ backgroundColor: 'rgba(0,84,255,0.2)', transition: { duration: 1 } });
        } else if (isExperienceHeaderVisible) {
            controls.start({ backgroundColor: 'rgba(91,10,213,0.2)', transition: { duration: 1 } });
        }
    }, [controls, isTopVisible, isProjectHeaderVisible, isExperienceHeaderVisible]);

    // @ts-ignore
    return (
        <motion.main
            animate={controls}
            initial={{ backgroundColor: 'rgba(0,0,0,0.46)' }}
            className="overflow-x-hidden mt-8"
        >
            <ScrollDownPrompt />
            <NavBar scrollToTop={scrollToTop} scrollToExperience={scrollToExperience} scrollToProjects={scrollToProjects} showBackToHome={false}/>
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <div ref={topRef}></div>
            <Header />
            <motion.div style={{ translateX }}>
                <TranslatingCarosel />
            </motion.div>
            <div ref={experienceHeaderRef}></div>
            <WorkExperienceHeader />
            <div className={"ml-5 mr-5"}>
                {
                    //take the keys of the experience object and map them to the WorkExperienceCard component
                    Object.keys(experience).map((key) => {
                        // @ts-ignore
                        var experienceObject = experience[key];
                        return <WorkExperienceCard
                            key={key}
                            logo={experienceObject.logo}
                            description={experienceObject.description}
                            tags={experienceObject.tags? experienceObject.tags : []}
                            duration={experienceObject.duration}
                            bulletPoints={experienceObject.bulletPoints? experienceObject.bulletPoints : []}
                        />
                    })
                }
            </div>
            <div ref={projectHeaderRef}></div>
            <ProjectsHeader/>
            <div className="flex flex-wrap justify-center gap-4 m-4" >
                {
                    //take the keys of the experience object and map them to the WorkExperienceCard component
                    Object.keys(projects).map((key) => {
                        // @ts-ignore
                        var projectObject = projects[key];
                        return <ProjectCard
                            key={key}
                            title={projectObject.title}
                            description={projectObject.description}
                            imageUrl={projectObject.imageUrl}
                            tags={projectObject.tags? projectObject.tags : []}
                            featured={projectObject.featured}
                            pageRoot={"/project/"+key}
                        />
                    })
                }
            </div>
            <Footer/>
        </motion.main>

    );
}