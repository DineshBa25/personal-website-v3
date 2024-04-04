"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {ScrollDownPrompt} from "@/app/ScrollDownPrompt";
import {PerspectiveImage} from "@/app/PerspectiveImage";
import {CardContainer, CardItem} from "@/components/card";

export function TranslatingCarosel() {
    return (
        <div className="flex flex-col items-center justify-center p-4 flex-shrink-0 overflow-x-visible">
            <motion.div
                initial={{ x: 500, rotate: 0 }}
                animate={{ x: 0, rotate: 0 }}
                transition={{ ease: "easeIn", duration: 1 }}
            >
                <CardContainer>
                    <CardItem translateZ="100" className="min-w-fit flex-shrink-0">
                        <Image
                            src="/app-images/BudgetTC Budget Book Dark.png"
                            width="500"
                            height="400"
                            className="h-60 rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="min-w-fit flex-shrink-0">
                        <Image
                            src="/app-images/Sharetea Final Images/Screenshot 2024-02-01 at 2.33.39 PM.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/BudgetTC Calc Auto.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/fincent dashboardcropped.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/BudgetTC Java- cropped.jpg"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/Screenshot 2022-09-13 103818.jpg"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/Screenshot 2022-10-16 173612.jpg"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/app-images/TMScreenshot_2022.05.02-16.21.26.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                </CardContainer>

            </motion.div>
        </div>
    );
}