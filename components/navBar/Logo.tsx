"use client";

import Image from "next/image";
import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";
import { HOME_TITLE } from "@/utils/constants/default";
import IMAGE_PATHS from "@/utils/constants/imagePath";

const Logo = () => {
  const router = useRouter();

  const homeHandler = () => {
    router.push("/");
  };

  return (
    <div className={styles.logoContainer} onClick={homeHandler}>
      <div>
        <Image
          src={IMAGE_PATHS.K_FOOD}
          width={48}
          height={48}
          alt="logo"
          role="button"
          aria-label="logo"
        />
      </div>
      <span className={styles.logoTitle}>{HOME_TITLE}</span>
    </div>
  );
};

export default Logo;
