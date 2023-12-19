"use client"

import Image from "next/image";
import styles from "./Logo.module.css";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  const TITLE = "How to Make K-Food";

  const homeHandler = () => {
    router.push('/');
  };

  return (
    <div className={styles.logoContainer} onClick={homeHandler}>
      <div>
        <Image src="/images/k-food.webp" width={48} height={48} alt="logo" />
      </div>
      <span className={styles.logoTitle}>{TITLE}</span>
    </div>
  );
};

export default Logo;
