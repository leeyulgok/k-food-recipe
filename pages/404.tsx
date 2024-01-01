import styles from "./404.module.css";
import ERROR_MESSAGES from "@/utils/constants/ErrorMessages";

const Custom404 = () => {
  // 잘못된 경로로 접근했을 때, 보이는 에러 페이지
  return (
    <div className={styles.errorContainer}>
      <h2>{ERROR_MESSAGES.DEFAULT}</h2>
    </div>
  );
};

export default Custom404;
