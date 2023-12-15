import { Swiper, SwiperSlide } from "swiper/react";
import { FC } from "react";
import "swiper/css";
import 'swiper/css/navigation';
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import styles from "./HeroSection.module.css";

SwiperCore.use([Navigation]);

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
  return (
    <section className="relative">
      <Swiper navigation={true} className="mySwiper">
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className={styles.backgroundContainer}>
              <Image
                src={section.backgroundImage}
                alt="Background"
                width={1000}
                height={1000}
                className={styles.backgroundImage}
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="text-center text-white">
                  <h1 className="text-4xl font-bold mb-4">{section.title}</h1>
                  <p className="mb-4">{section.description}</p>
                  <button className="bg-red-500 text-white rounded-full px-6 py-2 hover:bg-red-700 transition duration-300">
                    {section.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
