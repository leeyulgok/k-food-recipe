import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateDrawProps {
  children: ReactNode;
}

const AnimateDraw: FC<AnimateDrawProps> = ({ children }) => {
  const circleVariants = {
    hidden: { strokeDashoffset: 100, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: {
        default: { duration: 1, ease: "easeInOut" },
        fill: { duration: 1, ease: "easeInOut" },
      },
    },
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible">
      <motion.svg
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        color="green"
        viewBox="0 0 52 52"
      >
        <motion.circle
          cx="26"
          cy="26"
          r="25"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="157"
          variants={circleVariants}
        />
        <motion.path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          d="M12,26 L22,36 L42,16"
          variants={checkVariants}
        />
        {children}
      </motion.svg>
    </motion.div>
  );
};

export default AnimateDraw;
