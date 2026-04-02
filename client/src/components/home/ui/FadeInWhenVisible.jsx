import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

/**
 * Fade + slight rise. Use trigger="mount" for above-the-fold hero content;
 * default "view" runs when the block enters the viewport (once).
 */
export default function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.65,
  y = 18,
  amount = 0.35,
  trigger = "view",
  ...boxProps
}) {
  const variants = {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
  };
  const transition = { duration, ease: [0.25, 0.1, 0.25, 1], delay };
  const viewport = { once: true, amount, margin: "0px 0px -48px 0px" };

  if (trigger === "mount") {
    return (
      <MotionBox
        initial="initial"
        animate="animate"
        variants={variants}
        transition={transition}
        {...boxProps}
      >
        {children}
      </MotionBox>
    );
  }

  return (
    <MotionBox
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={variants}
      transition={transition}
      {...boxProps}
    >
      {children}
    </MotionBox>
  );
}
