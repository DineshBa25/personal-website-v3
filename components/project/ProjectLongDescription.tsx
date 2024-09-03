import React from 'react';

interface ProjectCarouselProps {
    description: string;
}
const ProjectInfo: React.FC<ProjectCarouselProps> = ({ description }) => {

    return (
        <div className="bg-gray-950 text-white shadow-md rounded-lg p-1 space-y-4 mb-4">
            <h2 className="text-3xl font-thin text-blue-400 border-b border-blue-400 pb-1">Description</h2>
            <p className="text-md" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }}></p>        </div>
    );
};

export default ProjectInfo;