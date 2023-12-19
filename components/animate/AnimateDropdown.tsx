import { FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimateDropdownProps {
  isOpen: boolean;
  className?: string;
  children: ReactNode;
}

const AnimateDropdown: FC<AnimateDropdownProps> = ({ isOpen, className, children }) => {
  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={variants}
          transition={{ duration: 0.5 }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimateDropdown;
