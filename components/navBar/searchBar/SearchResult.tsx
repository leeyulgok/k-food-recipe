import React, { FC } from "react";
import styles from "./SearchResult.module.css";
import { DataType } from "@/utils/types/DataType";
import Thumbnail from "../../common/Thumbnail";

interface SearchResultProps {
  searchResult: DataType | null;
  handleClick: (recipe: DataType) => void;
}

const SearchResult: FC<SearchResultProps> = ({ searchResult, handleClick }) => {
  return (
    <div className={styles.searchResultsContainer}>
      {searchResult ? (
        <div
          className={styles.searchResultItem}
          onClick={() => handleClick(searchResult)}
        >
          <div className={styles.searchResultBox}>
            <div className={styles.searchResultThumbnail}>
              <Thumbnail youtubeId={searchResult.Y_ID} />
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
  );
};

export default SearchResult;
