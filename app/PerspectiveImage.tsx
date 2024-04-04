import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

export function PerspectiveImage() {
    const [style, setStyle] = useState({ rotateX: 0, rotateY: 0, scale: 1.05 });

    const handleMouseMove = (e: { currentTarget: { getBoundingClientRect: () => { left: any; top: any; width: any; height: any; }; }; clientX: number; clientY: number; }) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20; // Adjust these values to change sensitivity
        const y = ((e.clientY - top) / height - 0.5) * -20; // Negative value for inverse rotation
        setStyle({ rotateX: y, rotateY: x, scale: 1.05 });
    };

    return (
        <motion.div
            initial={{ x: -50, rotate: -40 }}
            animate={{ x: -10, rotate: 0 }}
            transition={{ ease: "easeIn", duration: 1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0, scale: 1 })}
            style={{
                perspective: 1000, // Adjust this value for more/less depth
                ...style
            }}
        >
            <motion.div
                style={{
                    rotateX: style.rotateX,
                    rotateY: style.rotateY,
                    scale: style.scale,
                    transition: 'all 0.1s linear',
                }}
            >
                <div className="border-4 z-10 border-gray-400 rounded-full">
                    <Image className="rounded-full" src="/profile-picture.jpeg" alt="Dinesh Balakrishnan" width={200} height={200} layout="intrinsic" />
                </div>
            </motion.div>
        </motion.div>
    );
}
