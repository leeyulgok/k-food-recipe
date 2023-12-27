import React, { FC } from "react";
import styles from "./FooterSection.module.css";
import FooterItem from "./FooterItem";

interface FooterSectionProps {
  title: string;
  contents: string[] | string;
}

const FooterSection: FC<FooterSectionProps> = ({ title, contents }) => {
  return (
    <div className={styles.footerSection}>
      <h3 className={styles.footerTitle}>{title}</h3>
      <div>
        {typeof contents !== "string" ? (
          <ul>
            {contents.map((content, index) => (
              <li key={index} className={styles.content}>
                <FooterItem title={title} content={content} />
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.content}>{contents}</div>
        )}
      </div>
    </div>
  );
};

export default FooterSection;
