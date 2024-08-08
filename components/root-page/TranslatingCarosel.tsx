"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {ScrollDownPrompt} from "@/components/ui/ScrollDownPrompt";
import {PerspectiveImage} from "@/components/root-page/PerspectiveImage";
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
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/budgettc/BudgetTC Budget Book Dark.png"
                            width="500"
                            height="400"
                            className="h-60 rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/help-desk-central-dashboard/exclude-hdc-dashboard.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/budgettc-java/BudgetTC Java- cropped.jpg"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/modern-getaway/TMScreenshot_2022.05.02-16.21.17.png"
                            width={"500"}
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/misc/946534270_X-Plane2019-10-2822-10-25.png.0b562df5c74fe2df333d8c41f4c9807e.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/fincent/fincent dashboard.png"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/misc/Screenshot 2022-10-16 173612.jpg"
                            width="500"
                            height="300"
                            className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <CardItem translateZ="100" className="w-100 flex-shrink-0">
                        <Image
                            src="/images/app-images/organization-tracker/img.png"
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