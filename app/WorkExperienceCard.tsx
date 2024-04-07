// WorkExperienceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface WorkExperienceCardProps {
    logo: string;
    description: string;
    tags: string[];
    duration: string;
    bulletPoints: string[]; // Include bullet points
}

export const WorkExperienceCard: React.FC<WorkExperienceCardProps> = ({ logo, description, tags, duration, bulletPoints }) => {
    // Animation variants
    const cardVariants = {
        offscreen: {
            x: -100, // Start off-screen to the left
            opacity: 0
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <motion.div
            className={"cardContainer"} // Apply CSS module styles
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
                <img src={logo} alt="logo" style={{ height: '100px', borderRadius: '20px', marginBottom: '20px' }}/>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{ textAlign: 'center', maxWidth: '100%' }}
                    className={"text-purple-400 text-2xl"}
                >
                    {description}
                </motion.p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            style={{ padding: '5px 10px', borderRadius: '20px', backgroundColor: '#333', color: '#fff', fontSize: '0.9em' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <p className={"mt-2 p-3 bg-neutral-900 rounded-2xl text-gray-400 text-xl"}>{duration}</p>
            </div>

            <div style={{ flex: 1, paddingLeft: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 20, background: "#181818", borderRadius:20 }} >
                    {bulletPoints.map((point, index) => (
                        <li key={index} style={{ marginBottom: '10px', position: 'relative', paddingLeft: '20px' }}>
                            <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            }}></span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};
