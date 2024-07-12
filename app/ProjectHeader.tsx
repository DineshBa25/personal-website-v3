"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {PerspectiveImage} from "@/app/PerspectiveImage";
import {HeaderGradientAnimation} from "@/app/HeaderGradientAnimation";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export class ProjectHeader extends React.Component<{ name: any, shortDescription: any, images: any, longDescription: any }> {
    render() {
        let {name, shortDescription, images, longDescription} = this.props;
        return (
            <div>
            <HeaderGradientAnimation className="flex flex-col items-center justify-center p-4 pt-20">
                <div
                    className="flex flex-col mb-5 justify-center items-center md:flex-row md:justify-between lg:px-20 xl:px-40 2xl:px-60">
                    <div className="mt-5 md:mt-0 ml-5">
                        <motion.div
                            initial={{x: 100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: -100, opacity: 0}}
                            transition={{ease: "easeIn", duration: 1}}
                        >
                            <h1 className="text-2xl md:text-3xl text-white lg:text-5xl text-center">{name}</h1>
                        </motion.div>
                        <motion.div
                            initial={{y: 25, opacity: 0}}
                            animate={{y: 5, opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{ease: "easeIn", duration: 1, delay: 1}}
                        >
                            <h2 className="text-md mt-1 text-blue-400 md:text-xl">{shortDescription}</h2>
                        </motion.div>
                    </div>
                </div>
            </HeaderGradientAnimation >
                <div className={"flex flex-col md:flex-row pt-5"}>
                    <div className={"lg:w-1/2 md:w-full md:min-w-xs md:mx-auto sm:mx-auto md:px-8 sm:px-6"}>
                        <ImageGallery items={images}/>
                    </div>
                    <div className={"lg:w-1/2 md:w-full md:min-w-xs md:mx-auto sm:mx-auto md:px-8 sm:px-6 pt-5 text-lg"}>
                        <p>{longDescription}</p>
                    </div>
                </div>
            </div>

    );
    }
}
