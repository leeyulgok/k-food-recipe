import { useRouter } from "next/router";

const useSearchInteraction = (searchQuery: string, setSearchQuery: Function, setIsSearch: Function) => {
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery) {
      router.push(`/list?search=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
    setIsSearch(false);
  };

  return { handleSearch };
};

export default useSearchInteraction;
