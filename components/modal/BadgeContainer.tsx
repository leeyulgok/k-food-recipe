import React, { FC } from "react";
import Badge from "../common/Badge";
import styles from "./BadgeContainer.module.css";

interface BadgeContainerProps {
  badges: string[];
}

const BadgeContainer: FC<BadgeContainerProps> = ({ badges }) => {
  return (
    <div className={styles.badgeBox}>
      {badges.map((text, index) => (
        <Badge key={index} text={text} />
      ))}
    </div>
  );
};

export default BadgeContainer;
