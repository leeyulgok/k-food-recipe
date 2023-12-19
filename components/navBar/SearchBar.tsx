"use client"

import { useState } from "react";
import Image from "next/image";
import AnimateWidth from "../animate/AnimateWidth";
import AnimateFade from "../animate/AnimateFade";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  return (
    <div className={styles.searchBarContainer}>
      <AnimateWidth isOpen={isInputVisible} className={styles.buttonContainer}>
        <button
          className={styles.searchButton}
          onClick={() => setInputVisible(!isInputVisible)}
        >
          <Image src="/images/search.webp" width={20} height={20} alt="검색" />
        </button>
        <AnimateFade isVisible={isInputVisible} className={styles.searchInputContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
          />
          <button className={styles.searchSubmitButton}>
            Search
          </button>
        </AnimateFade>
      </AnimateWidth>
    </div>
  );
};

export default SearchBar;
