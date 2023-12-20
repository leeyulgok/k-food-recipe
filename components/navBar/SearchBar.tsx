"use client"

import { useState } from "react";
import Image from "next/image";
import AnimateWidth from "../animate/AnimateWidth";
import AnimateFade from "../animate/AnimateFade";
import { useRouter } from 'next/router';
import styles from "./SearchBar.module.css";

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
          <Image src="/images/search.webp" width={20} height={20} alt="검색" />
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
