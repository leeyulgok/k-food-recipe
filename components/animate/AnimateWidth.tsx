import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateWidthProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}

const AnimateWidth: FC<AnimateWidthProps> = ({ isOpen, className, children }) => {
  const variants = {
    open: { width: "100%", transition: { duration: 0.7 } },
    closed: { width: "20px", transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateWidth;
