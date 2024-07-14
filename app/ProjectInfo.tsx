import React from 'react';

type ProjectInfoProps = {
    tags: string[];
    githubLink: string;
    contributors: number;
    linesOfCode: string;
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({ tags, githubLink, contributors, linesOfCode }) => {
    return (
        <div>
            <h2 className="text-3xl font-thin text-blue-400 border-b border-blue-400 pb-1">Project Information</h2>

            <div className="bg-gray-900 text-white shadow-md rounded-lg p-4 space-y-4">
                <div>
                    <h3 className="font-bold text-blue-300 mb-2">Skills:</h3>
                    <div className="flex flex-wrap">
                        {tags.map((tag, index) => (
                            <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded mr-2 mb-2">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <h3 className="font-bold text-blue-300 mr-2">GitHub:</h3>
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>            </div>
                <div className="flex items-center mb-4">
                    <h3 className="font-bold text-blue-300 mr-2">Contributors:</h3>
                    <p className="text-lg">{contributors}</p>
                </div>
                <div className="flex items-center">
                    <h3 className="font-bold text-blue-300 mr-2">Lines of Code:</h3>
                    <p className="text-lg">{linesOfCode}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;