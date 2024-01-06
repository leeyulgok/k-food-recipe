import React, { useState } from "react";
import SearchBar from "./SearchBar";
import useSearch from "@/hooks/useSearch";

const SearchBarContainer = () => {
  const {
    searchQuery,
    isSearch,
    searchResult,
    searchContainerRef,
    handleSearchChange,
    handleSearch,
    isInputVisible,
    handleClick,
    handleSearchButton,
    handleFocus
  } = useSearch();

  return (
    <SearchBar
      searchQuery={searchQuery}
      isInputVisible={isInputVisible}
      isSearch={isSearch}
      searchResult={searchResult}
      searchContainerRef={searchContainerRef}
      handleSearchChange={handleSearchChange}
      handleSearch={handleSearch}
      handleClick={handleClick}
      handleFocus={handleFocus} 
      handleSearchButton={handleSearchButton}
    />
  );
};

export default SearchBarContainer;
