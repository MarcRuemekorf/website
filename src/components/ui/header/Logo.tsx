"use client"

import { useEffect, useState } from "react"
import { motion, useAnimate } from "motion/react"
import Image from "next/image";
import { Box, chakra } from "@chakra-ui/react";

const MotionBox = chakra(motion.div);

const Logo = () => {
    const [motionRef, animate] = useAnimate()
    const [imageKey, setImageKey] = useState(0)

    const handleClick = () => {
        setImageKey(prev => prev + 1)
    }

    useEffect(() => {
        const motionElement = motionRef.current

        const motionAnimation = animate(
            motionElement,
            { outlineColor: ["#ff0088", "#0d63f8"] },
            {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
            }
        )

        return () => {
            motionAnimation.cancel()
        }
    }, [animate])

    return (
        <>
            <Box 
                display="flex"
                gap={30}
                alignItems="center"
                justifyContent="center"
            >
                <MotionBox
                    ref={motionRef}
                    w="48px"
                    h="48px"
                    p="2px"
                    bg="black"
                    borderRadius="md"
                    outlineWidth="2px"
                    outlineStyle="solid"
                    outlineColor="#ff0088"
                    whileHover={{ 
                        outlineWidth: "4px",
                        transition: { duration: 0.1 }
                    }}
                    whileTap={{ 
                        outlineWidth: "2px",
                    }}
                    cursor="pointer"
                    onClick={handleClick}
                >
                    <Box bg="black" borderRadius="sm" w="100%" h="100%" overflow="hidden">
                        <Image 
                            src={`https://placecats.com/300/300?random=${imageKey}`} 
                            width="48" 
                            height="48" 
                            alt="Logo"
                            key={imageKey}
                        />
                    </Box>
                </MotionBox>
            </Box>
        </>
    )
}

export default Logo