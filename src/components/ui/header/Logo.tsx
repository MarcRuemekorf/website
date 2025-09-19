"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import Image from "next/image";
import { Box, chakra } from "@chakra-ui/react";

const MotionBox = chakra(motion.div);

const Logo = () => {
  const [motionRef, animate] = useAnimate();
  const [imageKey, setImageKey] = useState(0);
  const logoSize = 72;

  const handleClick = () => {
    setImageKey((prev) => prev + 1);
  };

  useEffect(() => {
    const motionElement = motionRef.current;

    const motionAnimation = animate(
      motionElement,
      {
        outlineColor: [
          "#7b84ff",
          "#68a5ff",
          "#5fc6ff",
          "#63e5fc",
          "#73ffcd",
          "#8dff9d",
          "#aeff6f"
        ],
      },
      {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }
    );

    return () => {
      motionAnimation.cancel();
    };
  }, [animate]);

  return (
    <>
      <Box display="flex" gap={30} alignItems="center" justifyContent="center">
        <MotionBox
          ref={motionRef}
          w={`${logoSize}px`}
          h={`${logoSize}px`}
          p="2px"
          bg="transparent"
          borderRadius="md"
          outlineWidth="4px"
          outlineStyle="solid"
          outlineColor="blue.500"
          whileHover={{
            outlineWidth: "2px",
            transition: { duration: 0.1 },
          }}
          whileTap={{
            outlineWidth: "4px",
          }}
          cursor="pointer"
          onClick={handleClick}
        >
          <Box bg="black" borderRadius="sm" w="100%" h="100%" overflow="hidden">
            <Image
              src={`https://placecats.com/300/300?random=${imageKey}`}
              width={logoSize}
              height={logoSize}
              alt="Logo"
              key={imageKey}
            />
          </Box>
        </MotionBox>
      </Box>
    </>
  );
};

export default Logo;
