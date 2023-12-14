import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItem from './MenuItems';

type DropdownProps = {
  title: string;
  items: string[];
};

const Dropdown: FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 }
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        onClick={toggleOpen}
        className="text-gray-800 hover:text-gray-600 transition duration-300 cursor-pointer"
        aria-expanded={isOpen}
      >
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.5 }}
            className="absolute bg-white shadow-lg mt-2 rounded-lg w-48 overflow-hidden z-10"
            role="menu"
          >
            {items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
