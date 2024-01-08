import { FC } from "react";
import SwipeLeft from "./SwipeLeft";
import SwipeRight from "./SwipeRight";
import styles from "./SwipeIcon.module.css"

interface SwipeIconProps {
  direction: "left" | "right";
}

const SwipeIcon: FC<SwipeIconProps> = ({ direction }) => {
  return (
    <div className={`${styles.swipeIcon} ${direction === "left" ? styles.left : styles.right}`}>
      {direction === "left" ? <SwipeLeft /> : <SwipeRight />}
    </div>
  );
};

export default SwipeIcon;
