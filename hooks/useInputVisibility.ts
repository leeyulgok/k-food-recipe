import { useState } from "react";

const useInputVisibility = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const handleSearchButton = () => {
    setInputVisible((prevState) => !prevState);
  };

  return { isInputVisible, setInputVisible, handleSearchButton };
};

export default useInputVisibility;