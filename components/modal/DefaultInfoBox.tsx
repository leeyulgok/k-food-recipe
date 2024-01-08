import { FC, ReactElement } from "react";
import styles from './DefaultInfoBox.module.css';


interface DefaultInfoBoxProps {
  icon: ReactElement;
  text: string | number;
}

const DefaultInfoBox: FC<DefaultInfoBoxProps> = ({ icon, text }) => {
  return (
    <div className={styles.defaultInfoBox}>
      {icon}
      <div className={styles.descriptionBox}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default DefaultInfoBox;
