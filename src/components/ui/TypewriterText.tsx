"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Flex } from '@chakra-ui/react';

interface TypewriterTextProps {
    texts: string[];
    speed?: number;
    delay?: number;
    pauseDuration?: number;
    cursor?: boolean;
    onComplete?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
    texts,
    speed = 75,
    delay = 0,
    pauseDuration = 2000,
    cursor = true,
    onComplete,
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isErasing, setIsErasing] = useState(false);

    const currentText = texts[currentTextIndex] || '';

    useEffect(() => {
        // Reset state when texts array changes
        setDisplayedText('');
        setCurrentIndex(0);
        setCurrentTextIndex(0);
        setIsComplete(false);
        setIsErasing(false);
    }, [texts]);

    useEffect(() => {
        if (!currentText) return;

        if (isErasing) {
            // Erasing the current text
            if (currentIndex > 0) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentText.substring(0, currentIndex - 1));
                    setCurrentIndex((prev) => prev - 1);
                }, speed / 2); // Erase faster than typing

                return () => clearTimeout(timeout);
            } else {
                // Finished erasing, move to next text
                setIsErasing(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                setCurrentIndex(0);
            }
        } else {
            // Typing the current text
            if (currentIndex < currentText.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev + currentText[currentIndex]);
                    setCurrentIndex((prev) => prev + 1);
                }, currentIndex === 0 ? delay : speed);

                return () => clearTimeout(timeout);
            } else {
                setIsComplete(true);
                onComplete?.();
                
                const pauseTimeout = setTimeout(() => {
                    setIsComplete(false);
                    setIsErasing(true);
                }, pauseDuration);

                return () => clearTimeout(pauseTimeout);
            }
        }
    }, [currentIndex, currentText, delay, onComplete, speed, texts, isErasing, pauseDuration]);

    return (
        <Flex align="center">
            <AnimatePresence mode="wait">
                <motion.span
                    key={displayedText}
                    transition={{ duration: 0.1 }}
                >
                    {displayedText}
                </motion.span>
            </AnimatePresence>

            {cursor && (
                <motion.span
                    animate={{ opacity: isComplete && !isErasing ? [1, 0] : 1 }}
                    transition={{ 
                        duration: 0.8, 
                        repeat: isComplete && !isErasing ? Infinity : 0, 
                        repeatType: "reverse" 
                    }}
                >
                    <Box w="1px" h="1em" bg="white" ml="2px" />
                </motion.span>
            )}
        </Flex>
    );
};

export default TypewriterText;