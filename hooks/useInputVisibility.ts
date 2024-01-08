import { useState } from "react";

const useInputVisibility = (setIsSearch: Function) => {
  const [isInputVisible, setInputVisible] = useState(false);

  const handleSearchButton = () => {
    setInputVisible((prevState) => !prevState);
    setIsSearch(false);
  };

  return { isInputVisible, setInputVisible, handleSearchButton };
};

export default useInputVisibility;