"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInput = () => setInputVisible(!isInputVisible);

  const searchButtonVariants = {
    visible: { width: "100%", transition: { duration: 0.7 } },
    hidden: { width: "20px", transition: { duration: 0.7 } },
  };

  return (
    <div className="flex items-center">
      <motion.div
        className="flex items-center overflow-hidden"
        initial="hidden"
        animate={isInputVisible ? "visible" : "hidden"}
        variants={searchButtonVariants}
      >
        <button
          className="text-gray-600 focus:outline-none"
          onClick={toggleInput}
        >
          <Image src="/images/search.webp" width={20} height={20} alt="검색" />
        </button>
        <AnimatePresence>
          {isInputVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
              exit={{ opacity: 0, transition: { duration: 0.7 } }}
              style={{ maxWidth: "300px", maxHeight: "50px" }}
              className="flex"
            >
              <input
                type="text"
                className="bg-gray-200 appearance-none border-2 rounded-l-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                placeholder="Search..."
              />
              <button className="bg-red-400 text-white rounded-r-full py-2 px-4 hover:bg-red-700 focus:outline-none">
                Search
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SearchBar;
