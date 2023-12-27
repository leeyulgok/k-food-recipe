import React, { FC } from "react";
import styles from "./InfoBox.module.css";

interface InfoBoxProps {
  type: 'ingredients' | 'explanation';
  title: string;
  content: string | string[];
}

const InfoBox: FC<InfoBoxProps> = ({ type, title, content }) => {
  return (
    <div className={styles.infoBox}>
      <h3 className={styles.infoTitle}>{title}</h3>
      <div className={styles.infoContent}>
        {type === 'ingredients' && Array.isArray(content) && (
          <ul>
            {content.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        )}
        {type === 'explanation' && typeof content === 'string' && (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
