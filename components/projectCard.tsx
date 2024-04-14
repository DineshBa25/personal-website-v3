import {cn} from "@/utils/cn";
import Image from 'next/image';
import React from 'react';
import {BackgroundGradient} from "@/components/ui/background-gradient";

// @ts-ignore
const ProjectCard = ({ title, description, imageUrl, tags, featured }) => {
    const imageAndTitleContent = (
        <div className="relative w-full h-48">
            <Image src={imageUrl} layout="fill" objectFit="cover" alt={title} className="transition-opacity duration-500 hover:opacity-80 rounded-t-3xl" />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-xl font-bold">{title}</h2>
            </div>
            {featured && (
                <div className="absolute -top-14 -right-14 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" className="h-20 w-20" viewBox="0 0 24 24" stroke="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 8 14.15l-5-4.88 6.91-1.01L12 2z"/>
                    </svg>
                </div>
            )}
        </div>
    );

    return (
        <div className="bg-black text-white overflow-visible shadow-lg overflow-hidden p-1 h-max rounded-3xl relative">
            {featured ? <BackgroundGradient className={"rounded-[22px] p-3 bg-white dark:bg-black"}>{imageAndTitleContent}</BackgroundGradient> : imageAndTitleContent}
            <div className="p-4">
                <p className="mb-4 w-80">{description}</p>
                <div className="flex flex-wrap gap-2 w-96">
                    {tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                        <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;