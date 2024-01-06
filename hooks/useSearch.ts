"use client"

import { useEffect } from 'react';
import useSearchQuery from './useSearchQuery';
import useSearchAPI from './useSearchAPI';
import useSearchUI from './useSearchUI';
import useSearchInteraction from './useSearchInteraction';
import useInputVisibility from './useInputVisibility';
import useReduxActions from './useReduxActions';
import useSearchFocus from './useSearchFocus';

const useSearch = () => {
  const { searchQuery, setSearchQuery, handleSearchChange } = useSearchQuery();
  const { searchResult, debouncedSearch } = useSearchAPI();
  const { isSearch, setIsSearch, searchContainerRef } = useSearchUI();
  const { handleSearch } = useSearchInteraction(searchQuery, setSearchQuery, setIsSearch);
  const { isInputVisible, handleSearchButton } = useInputVisibility();
  const { handleClick } = useReduxActions();
  const { handleFocus } = useSearchFocus(setIsSearch);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  return {
    searchQuery,
    handleSearchChange,
    searchResult,
    isSearch,
    searchContainerRef,
    handleSearch,
    isInputVisible,
    handleClick,
    handleSearchButton,
    handleFocus
  };
};

export default useSearch;

