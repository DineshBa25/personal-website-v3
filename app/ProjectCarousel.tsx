import React from 'react';
import { Carousel } from 'react-responsive-carousel';

interface Project {
    image: string;
    name: string;
    description: string;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
    return (
        <Carousel className={"carousel"}>
            {projects.map((project, index) => (
                <div key={index}>
                    <img src={project.image} alt={project.name} className={"slide"} />
                    <p className="legend">{project.name}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default ProjectCarousel;