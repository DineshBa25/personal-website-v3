import { useState, useEffect } from 'react';
import {motion} from "framer-motion";

// @ts-ignore
export const HeaderGradientAnimation = ({ children, ...props }) => {
    const { className } = props;

    // Gradient direction and animation frame ID state
    const [gradientDirection, setGradientDirection] = useState(0);
    const [animationFrameId, setAnimationFrameId] = useState(null);

    useEffect(() => {
        // Function to update the gradient direction smoothly over time
        const updateGradientAutomatically = () => {
            setGradientDirection((prevDirection) => (prevDirection + 0.5) % 360);
            // @ts-ignore
            setAnimationFrameId(requestAnimationFrame(updateGradientAutomatically));
        };

        // Start the automatic gradient update
        if (animationFrameId === null) {
            updateGradientAutomatically();
        }

        // Cleanup on unmount
        return () => {
            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [animationFrameId]);

    const handleMouseMove = (event: { clientX: any; clientY: any; currentTarget: any; }) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Center-relative mouse position with a dead zone
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const dx = clientX - centerX;
        const dy = clientY - centerY;


        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        setGradientDirection(angle);

    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}

            {...props}
            onMouseMove={handleMouseMove}
            style={{
                ...props.style,
                background: `linear-gradient(${gradientDirection}deg, rgba(108, 0, 162, 0.5), rgba(0, 17, 82, 0.5)`,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
