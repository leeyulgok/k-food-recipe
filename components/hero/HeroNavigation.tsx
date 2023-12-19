import { FC } from "react";
import styles from "./HeroNavigation.module.css";

interface HeroNavigationProps {
  currentIndex: number;
  totalSlides: number;
  goToSlide: (index: number) => void;
}

const HeroNavigation: FC<HeroNavigationProps> = ({ currentIndex, totalSlides, goToSlide }) => {
  return (
    <div className={styles.navigation}>
      <button onClick={() => goToSlide((currentIndex - 1 + totalSlides) % totalSlides)}>&lt;</button>
      <span>{`${currentIndex + 1} / ${totalSlides}`}</span>
      <button onClick={() => goToSlide((currentIndex + 1) % totalSlides)}>&gt;</button>
    </div>
  );
};

export default HeroNavigation;
