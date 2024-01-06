"use client"

import { useState, useCallback, useEffect, useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import debounce from 'lodash/debounce';
import Image from "next/image";
import IMAGE_PATHS from "@/utils/constants/imagePath";
import styles from "./SearchBar.module.css";
import AnimateWidth from "../animate/AnimateWidth";
import AnimateFade from "../animate/AnimateFade";
import { DataType } from "@/utils/types/DataType";
import Thumbnail from "../common/Thumbnail";
import { useDispatch } from "react-redux";
import { openModal } from "@/app/redux/feature/modalSlice";
import DetailModal from "../modal/DetailModal";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState<DataType | null>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/list?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
  
    if (!newQuery) {
      setSearchResult(null);
    }
  };

  const handleClick = (recipe: DataType) => {
    dispatch(openModal(recipe));
  };

  const handleFocus = () => {
    setIsSearch(true);
  };

  const handleSearchButton = () => {
    setIsSearch(false);
    setInputVisible(!isInputVisible);
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearch(false);
      }
    };
  
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);  

  const debouncedSearch = useCallback(debounce(async (query: string) => {
    if (query) {
      try {
        const response = await fetch(`http://localhost:3001/list?search=${encodeURIComponent(query)}&type=dynamic`);
        const data = await response.json();
        setSearchResult(data[0]);
      } catch (error) {
        console.error("Search request failed:", error);
      }
    } else {
      setSearchResult(null);
    }
  }, 300), []);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  return (
    <div ref={searchContainerRef} className={styles.searchBarContainer}>
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
            onChange={handleSearchChange}
            onFocus={handleFocus}
            />
            <button className={styles.searchSubmitButton} onClick={handleSearch}>
              Search
            </button>
        </AnimateFade>
      </AnimateWidth>
      {isSearch && (
        <div className={styles.searchResultsContainer}>
          {searchResult ? (
            <div className={styles.searchResultItem} onClick={() => handleClick(searchResult)}>
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
      <DetailModal />
    </div>
  );
};

export default SearchBar;
