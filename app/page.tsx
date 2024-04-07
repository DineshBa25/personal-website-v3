"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Header } from "@/app/Header";
import NavBar from "@/app/NavBar"; // import NavBar component
import { motion, useScroll } from "framer-motion";
import {TranslatingCarosel} from "@/app/TranslatingCarosel";
import { useTransform } from "framer-motion";
import { WorkExperienceCard } from './WorkExperienceCard';
import {WorkExperienceHeader} from "@/app/WorkExperienceHeader";
import {ScrollDownPrompt} from "@/app/ScrollDownPrompt";
import {ProjectsHeader} from "@/app/ProjectsHeader";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const translateX = useTransform(scrollYProgress, [0, 1], [0, -8300]);

    const sectionRef = useRef<HTMLDivElement>(null); // Specify the type as HTMLDivElement
    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({behavior: 'smooth'});
    };



    return (
        <main className="flex min-h-screen z-50 flex-col justify-between pt-16 overflow-hidden  ">
            <ScrollDownPrompt />
            <NavBar scrollToSection={scrollToSection} /> {/* use NavBar component */}
            <motion.div
                className="progress-bar"
                style={{ scaleX: scrollYProgress }}
            />
            <Header />
            <motion.div style={{ translateX }}>
                <TranslatingCarosel />
            </motion.div>


            <WorkExperienceHeader />
            <div className={"ml-5 mr-5"}>
            <WorkExperienceCard
                logo="/tds_telecommunications_llc_cover.png"
                description="IT-Intern (Software Engineering)"
                tags={["JavaScript", "React", "TypeScript"]}
                duration="Feb 2023 - Feb 2024"
                bulletPoints={["Effectively maintained a range of large-scale applications, using languages like Perl, PHP, Java, and Python and produced software technical documentation and produced important team documentation.",
                                "Utilized the team Kanban method for Agile software development and used JIRA and confluence for project and\n" +
                                "knowledge management.",
                    "Developed an LDAP pooled authentication proxy to authenticate all POP3/IMAP email clients for TDS email au- thentication; Learned to implement efficient threading using python and effectively perform distributed load testing",
                    "Produced automated CI/CD pipelines for Java and Python applications and libraries using Jenkins and Ansible"]}
            />

            <WorkExperienceCard
                logo="/tamu-div-it-logo.png"
                description="Student Coordinator"
                tags={["JavaScript", "React", "TypeScript"]}
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
                tags={["JavaScript", "React", "TypeScript"]}
                duration="Oct 2021 - Jan 2023"
                bulletPoints={[" Assisted campus members with diverse IT challenges, from account troubleshooting to software/network out- age resolution through multiple channels: phone, chat, email, walk-ins, and ticketing systems like ServiceNow."
                    , "Always earned perfect QA scores"
                    , "Received lots of unsolicited commendable customer service feedback."
                ]}

            />
            </div>
            <ProjectsHeader/>
            <div ref={sectionRef} className="mt-48">
                <h2>This is the section to scroll to</h2>
            </div>
        </main>
    );
}