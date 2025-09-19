"use client";

import { motion, HTMLMotionProps } from "framer-motion";

type MotionElementProps = {
  children: React.ReactNode;
} & HTMLMotionProps<"span">;

const gradientText = ({ children, ...props }: MotionElementProps) => {
  // const gradientColors = [
  //   "var(--chakra-colors-cyan-500)",
  //   "var(--chakra-colors-purple-500)",
  //   "var(--chakra-colors-pink-500)",
  // ];

  const gradientColors = [
    "#7b84ff",
    "#68a5ff",
    "#5fc6ff",
    "#63e5fc",
    "#73ffcd",
    "#8dff9d",
    "#aeff6f"
  ];


  

  return (
    <motion.span
      {...props}
      style={{
        background: `linear-gradient(45deg, ${gradientColors.join(", ")})`,
        backgroundSize: "600% 600%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.span>
  );
};

export default gradientText;
