"use client"

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import debounce from 'lodash/debounce';
import Image from "next/image";
import IMAGE_PATHS from "@/utils/constants/imagePath";
import styles from "./SearchBar.module.css";
import AnimateWidth from "../animate/AnimateWidth";
import AnimateFade from "../animate/AnimateFade";
import { DataType } from "@/utils/types/DataType";
import Thumbnail from "../common/Thumbnail";
import Card from "../common/Card";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState<DataType | null>(null);
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/list?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleFocus = () => {
    setIsSearch(true);
  };

  const handleBlur = () => {
    setIsSearch(false);
  };

  const handleSearchButton = () => {
    setIsSearch(false);
    setInputVisible(!isInputVisible);
  }

  const debouncedSearch = useCallback(debounce(async (query: string, searchType = "dynamic") => {
    if (query) {
      try {
        const response = await fetch(`http://localhost:3001/list?search=${encodeURIComponent(query)}&type=${searchType}`);
        const data = await response.json();
        setSearchResult(data[0]);
      } catch (error) {
        console.error("Search request failed:", error);
      }
    }
  }, 300), []);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  return (
    <div className={styles.searchBarContainer}>
      <AnimateWidth isOpen={isInputVisible} className={styles.buttonContainer}>
        <button
          className={styles.searchButton}
          onClick={() => handleSearchButton()}
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <button className={styles.searchSubmitButton} onClick={handleSearch}>
              Search
            </button>
        </AnimateFade>
      </AnimateWidth>
      {isSearch && (
        <div className={styles.searchResultsContainer}>
          {searchResult ? (
            <div className={styles.searchResultItem}>
              <div className={styles.searchResultBox}>
                <div className={styles.searchResultThumbnail}>
                  <Thumbnail youtubeId={searchResult.Y_ID}/>
                </div>
                <div className={styles.searchResultTitle}>
                  <h2>{searchResult.CKG_NM}</h2>
                  <h3>{searchResult.CKG_NM_KO}</h3>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.searchResultItem}>검색 결과가 없습니다</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
