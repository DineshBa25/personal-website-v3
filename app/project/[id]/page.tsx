import React from 'react';
import projects from '@/public/information/projects.json';
import ProjectPage from "@/components/project/ProjectPage";
import {getImageUrls} from "@/helpers/getImageUrls";

interface BlogPostProps {
    params: {
        id: string;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ params: { id } }) => {

    const images = getImageUrls(id);

    if(Object.keys(projects).includes(id)){
        return (
            <ProjectPage
                // @ts-ignore
                images={images}
                // @ts-ignore
                longDescription={projects[id].longDescription}
                // @ts-ignore
                shortDescription={projects[id].shortDescription}
                // @ts-ignore
                title={projects[id].title}
                // @ts-ignore
                tags={projects[id].tags}
                // @ts-ignore
                githubLink={projects[id].githubLink}
                // @ts-ignore
                contributors={projects[id].contributors}
                // @ts-ignore
                linesOfCode={projects[id].linesOfCode}
                // @ts-ignore
                demo={projects[id].demo? projects[id].demo: "none"}
            />
        );
    }
    else {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-neutral-900 p-8 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">Whoops. That project was not found</h1>
                    <p className="text-grey-600 mb-6">We couldn&apos;t find the project with the id: {id}</p>
                    <a href={"/"}>
                        <button
                            className="mt-4 p-2 rounded-lg bg-gradient-to-r from-blue-800 to-blue-950 text-white w-full hover:from-blue-400 hover:to-blue-600"
                        >
                            Back to home?
                        </button>
                    </a>
                </div>
            </div>
        );

    }

};

export default BlogPost;
