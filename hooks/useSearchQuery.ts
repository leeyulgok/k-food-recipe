import { useState, useCallback } from "react";

const useSearchQuery = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  return { searchQuery, setSearchQuery, handleSearchChange };
};

export default useSearchQuery;
