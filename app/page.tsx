"use client";
import React, {useRef, useState} from 'react';
import { Header } from "@/app/Header";
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import {TranslatingCarosel} from "@/app/TranslatingCarosel";
import { useTransform } from "framer-motion";
import { WorkExperienceCard } from './WorkExperienceCard';
import {WorkExperienceHeader} from "@/app/WorkExperienceHeader";
import {ScrollDownPrompt} from "@/app/ScrollDownPrompt";
import {ProjectsHeader} from "@/app/ProjectsHeader";
import ProjectCard from "@/components/projectCard";
import { useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
    const controls = useAnimation();

    const topRef = useRef<HTMLDivElement>(null);
    const projectHeaderRef =  useRef<HTMLDivElement>(null);
    const experienceHeaderRef =  useRef<HTMLDivElement>(null);

    const [isTopVisible, setTopVisible] = useState(false);
    const [isProjectHeaderVisible, setProjectHeaderVisible] = useState(false);
    const [isExperienceHeaderVisible, setExperienceHeaderVisible] = useState(false);


    const projects = [
        {
            title: 'Help Desk Central Dashboard',
            description: 'A web based desktop application that aggregates important call center information for agents and supervisors to be displayed in the call center.',
            imageUrl: '/app-images/hdc-dashboard/hdc-dashboard.png',
            tags: ['React', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Electron.js'],
            featured: true
        },
        {
            title: 'BudgetTC',
            description: 'The next-gen financial management platform for building a budget and tracking your expenses.',
            imageUrl: '/app-images/BudgetTC Budget Book Dark.png',
            tags: ['React.js', 'HTML', 'CSS', 'Firebase', 'JavaScript'],
            featured: true
        },
        {
            title: 'Organization Tracker',
            description: 'Ruby on Rails application that allows you to seamlessly handle everything you need for an organization. Mass mailing, event Calendars, members, and so much more.',
            imageUrl: '/app-images/mabs-tracker/img.png',
            tags: ['Ruby on Rails', 'Ruby', 'JavaScript', 'HTML', 'CSS', 'pSQL', 'Docker', 'CI/CD', 'TailwindCSS'],
            featured: false
        },
        {
            title: 'ShareTea Point of Sales System',
            description: 'Online ordering system and website for ShareTea, complete with a beautiful and modern customer interface and an advanced admin panel with statistics.',
            imageUrl: '/app-images/Sharetea Final Images/Screenshot 2024-02-01 at 2.33.31 PM.png',
            tags: ['Next.js', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS', 'pSQL'],
            featured: false
        },
        {
            title: 'ShareTea Cashier System',
            description: 'A lightweight and efficient cashier system for processing orders and managing inventory for ShareTea.',
            imageUrl: '/app-images/Sharetea Final Images/java/img.png',
            tags: ['Java', 'JavaFX', 'FXML', 'CSS'],
            featured: false
        },
        {
            title: 'BudgetTC Java',
            description: 'A lightweight financial management software that allows you to build a budget and track expenses.',
            imageUrl: '/app-images/BudgetTC Java- cropped.jpg',
            tags: ['Java', 'Swing'],
            featured: false
        },
        // Add more projects as needed
        {
            title: 'Cloud Condo 3D',
            description: 'An elaborately modeled 3D High-Rise Luxury condo in the skies of Kuala Lumpur implemented with home automation features.',
            imageUrl: '/app-images/Early Condo Rendering.png',
            tags: ['Sketchup Pro', 'Unreal Engine 5', 'Blender'],
            featured: false
        },
        {
            title: 'Modern Getaway',
            description: 'A series of elaborately detailed modern homes and mansions built in Sketchup and visualized in Twinmotion',
            imageUrl: '/app-images/TMScreenshot_2022.05.02-16.21.17.png',
            tags: ['Sketchup Pro', 'Twinmotion', 'Blender'],
            featured: false
        },
        {
            title: 'TAMU CyberSecurity Student Tracking System',
            description: 'A modern student tracking and reporting tool tailored to the needs of the TAMU Cybersecurity Club',
            imageUrl: '/app-images/TAMUCC PHP Final Images/Screenshot 2024-02-02 at 3.46.17 PM.png',
            tags: ['PHP', 'mySQL', 'HTML', 'CSS'],
            featured: false
        },
    ];
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
                <WorkExperienceCard
                    logo="/garmin-png/Garmin Tag-black-high-res.png"
                    description="Software Engineering Intern"
                    tags={["JavaScript", "Python", "JQuery"]}
                    duration="Feb 2023 - Feb 2024"
                    bulletPoints={["2024 Summer intern in Aviation Solutions, web services..",
                    ]}
                />

                <WorkExperienceCard
                    logo="/tds_telecommunications_llc_cover.png"
                    description="IT-Intern (Software Engineering)"
                    tags={["Python", "Java", "HTML/CSS", "CI/CD", "Agile"]}
                    duration="Feb 2023 - Feb 2024"
                    bulletPoints={["Effectively maintained a range of large-scale applications, using languages like Perl, PHP, Java, and Python and produced software technical documentation and produced important team documentation.",
                                    "Utilized the team Kanban method for Agile software development and used JIRA and confluence for project and\n" +
                                    "knowledge management.",
                        "Developed an LDAP pooled authentication proxy to authenticate all POP3/IMAP email clients for TDS email authentication; Learned to implement efficient threading using python and effectively perform distributed load testing",
                        "Produced automated CI/CD pipelines for Java and Python applications and libraries using Jenkins and Ansible"]}
                />


                <WorkExperienceCard
                    logo="/tamu-div-it-logo.png"
                    description="Student Coordinator"
                    tags={["JavaScript", "React", "HTML/CSS", "Customer Service", "Troubleshooting", "Leadership"]}
                    duration="Jan 2023 - Sep 2023"
                    bulletPoints={["Supervised call center operations, guided technicians and addressed IT issues for over 130,000 beneficiaries.",
                        "Assessed and prioritized software outages, liaising with other IT departments and IT mission control to restore\n" +
                        "vital front-end and back-end university services promptly.",
                        "Built a modern, Web Scraping, Cloud hosted, Node.Js driven, dashboard and desktop client, providing critical\n" +
                        "metrics for call center efficiency and agent call queue data to both technicians and senior management"
                    ]}

                />

                <WorkExperienceCard
                    logo="/tamu-div-it-logo.png"
                    description="Student Technician"
                    tags={["Customer Service", "Troubleshooting"]}
                    duration="Oct 2021 - Jan 2023"
                    bulletPoints={[" Assisted campus members with diverse IT challenges, from account troubleshooting to software/network outage resolution through multiple channels: phone, chat, email, walk-ins, and ticketing systems like ServiceNow."
                        , "Always earned perfect QA scores"
                        , "Received lots of unsolicited commendable customer service feedback."
                    ]}

                />
            </div>
            <div ref={projectHeaderRef}></div>
            <ProjectsHeader/>


            <div className="flex flex-wrap justify-center gap-4 m-4" >
                {
                    projects.map((project, index) => (
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </motion.main>
    );
}