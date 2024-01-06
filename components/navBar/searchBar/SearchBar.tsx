"use client";

import { FC, RefObject } from "react";
import Image from "next/image";
import IMAGE_PATHS from "@/utils/constants/imagePath";
import styles from "./SearchBar.module.css";
import AnimateWidth from "../../animate/AnimateWidth";
import AnimateFade from "../../animate/AnimateFade";
import { DataType } from "@/utils/types/DataType";
import DetailModal from "../../modal/DetailModal";
import SearchResult from "./SearchResult";

interface SearchBarProps {
  searchQuery: string;
  isInputVisible: boolean;
  isSearch: boolean;
  searchResult: DataType | null;
  searchContainerRef: RefObject<HTMLDivElement>;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  handleClick: (recipe: DataType) => void;
  handleFocus: () => void;
  handleSearchButton: () => void;
}

const SearchBar: FC<SearchBarProps> = ({
  searchQuery,
  isInputVisible,
  isSearch,
  searchResult,
  searchContainerRef,
  handleSearchChange,
  handleSearch,
  handleClick,
  handleFocus,
  handleSearchButton,
}) => {
  return (
    <div ref={searchContainerRef} className={styles.searchBarContainer}>
      <AnimateWidth isOpen={isInputVisible} className={styles.buttonContainer}>
        <button
          className={styles.searchButton}
          onClick={() => handleSearchButton()}
        >
          <Image src={IMAGE_PATHS.SEARCH} width={20} height={20} alt="search" />
        </button>
        <AnimateFade
          isVisible={isInputVisible}
          className={styles.searchInputContainer}
        >
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
        <SearchResult
          searchResult={searchResult}
          handleClick={handleClick}
        />
      )}
      <DetailModal />
    </div>
  );
};

export default SearchBar;
