const useSearchFocus = (setIsSearch: Function) => {
  const handleFocus = () => {
    setIsSearch(true);
  };

  return { handleFocus };
};

export default useSearchFocus;
