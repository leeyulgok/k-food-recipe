import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimateFadeProps {
  isVisible: boolean;
  className?: string;
  children: ReactNode;
}

const AnimateFade: FC<AnimateFadeProps> = ({ isVisible, className, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
          exit={{ opacity: 0, transition: { duration: 0.7 } }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateFade;
