import { Variants } from "framer-motion";

type DirectionType = "up" | "down" | "left" | "right";

export const fadeIn = (direction: DirectionType, delay: number): Variants => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.9,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
