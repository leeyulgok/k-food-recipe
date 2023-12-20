import { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./HeroSlide.module.css";

type HeroSlideProps = {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
  children: ReactNode;
};

const HeroSlide: FC<HeroSlideProps> = ({ backgroundImage, title, description, buttonText, children }) => {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src={backgroundImage}
        alt="Background"
        width={1000}
        height={1000}
        className={styles.backgroundImage}
        priority
      />
      <div className={styles.textContainer}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          <div className={styles.buttonBox}>
            <button className={styles.button}>{buttonText}</button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
