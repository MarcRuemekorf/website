"use client"

import { HTMLMotionProps, motion } from 'framer-motion'

type MotionElementProps = {
  children: React.ReactNode;
} & HTMLMotionProps<'div'>;

const MotionElement = ({children, ...props}: MotionElementProps) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default MotionElement;