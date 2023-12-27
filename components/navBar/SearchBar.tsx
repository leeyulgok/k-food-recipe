"use client"

import { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import IMAGE_PATHS from "@/utils/constants/imagePath";
import styles from "./SearchBar.module.css";
import AnimateWidth from "../animate/AnimateWidth";
import AnimateFade from "../animate/AnimateFade";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/list?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <AnimateWidth isOpen={isInputVisible} className={styles.buttonContainer}>
        <button
          className={styles.searchButton}
          onClick={() => setInputVisible(!isInputVisible)}
        >
          <Image src={IMAGE_PATHS.SEARCH} width={20} height={20} alt="search" />
        </button>
        <AnimateFade isVisible={isInputVisible} className={styles.searchInputContainer}>
          <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className={styles.searchSubmitButton} onClick={handleSearch}>
              Search
            </button>
        </AnimateFade>
      </AnimateWidth>
    </div>
  );
};

export default SearchBar;
