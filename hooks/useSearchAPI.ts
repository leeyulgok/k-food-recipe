import { useState, useCallback } from "react";
import debounce from "lodash/debounce";
import { DataType } from "@/utils/types/DataType";

const useSearchAPI = () => {
  const [searchResult, setSearchResult] = useState<DataType | null>(null);

  const debouncedSearch = useCallback(
    debounce(async (query: string) => {
      if (query) {
        try {
          const response = await fetch(
            `http://localhost:3001/list?search=${encodeURIComponent(
              query
            )}&type=dynamic`
          );
          const data = await response.json();
          setSearchResult(data[0]);
        } catch (error) {
          console.error("Search request failed:", error);
        }
      } else {
        setSearchResult(null);
      }
    }, 300), []);

  return { searchResult, debouncedSearch };
};

export default useSearchAPI;
