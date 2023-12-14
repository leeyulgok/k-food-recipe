import Image from "next/image";
import { useState, FC } from "react";
import styles from './HeroSection.module.css'

type sections = {
    backgroundImage: string;
    title: string;
    description: string;
    buttonText: string;
}

type HeroSectionProps = {
  sections: sections[];
}

const HeroSection: FC<HeroSectionProps> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection((current) => (current + 1) % sections.length);
  };

  const previousSection = () => {
    setCurrentSection((current) => (current - 1 + sections.length) % sections.length);
  };

  const { backgroundImage, title, description, buttonText } = sections[currentSection];
  
  return (
    <section className="relative">
        <div className={styles.backgroundContainer}>
      <Image
        alt="Background"
        width={1000}
        height={1000}
        src={backgroundImage}
        className={styles.backgroundImage}
      />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
        <button onClick={previousSection}>{"<"}</button>
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4">{description}</p>
          <button className="bg-blue-500 text-white rounded-full px-6 py-2 hover:bg-blue-700 transition duration-300">
            {buttonText}
          </button>
        </div>
        <button onClick={nextSection}>{">"}</button>
      </div>
    </section>
  );
};

export default HeroSection;
