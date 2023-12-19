import { FC, useState, useEffect } from "react";
import HeroSlide from "./HeroSlide";
import HeroNavigation from "./HeroNavigation";
import styles from "./HeroSection.module.css";

type Section = {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
};

type HeroSectionProps = {
  sections: Section[];
};

const HeroSection: FC<HeroSectionProps> = ({ sections }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sections.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.swiperContainer}>
        {sections.map((section, index) => (
          <div
            key={index}
            className={index === currentIndex ? styles.slideActive : styles.slide}
            style={{
              opacity: index === currentIndex ? 1 : 0,
              position: index === currentIndex ? "relative" : "absolute",
              transition: "opacity 1s ease-in-out",
            }}
          >
            <HeroSlide {...section}>
              <HeroNavigation
                currentIndex={currentIndex}
                totalSlides={totalSlides}
                goToSlide={goToSlide}
              />
            </HeroSlide>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
