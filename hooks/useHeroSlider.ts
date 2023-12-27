import { useState, useEffect } from "react";

const useHeroSlider = (totalSlides: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return { currentIndex, goToSlide };
};

export default useHeroSlider;
