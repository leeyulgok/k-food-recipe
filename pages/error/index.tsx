import ERROR_MESSAGES from "@/utils/constants/ErrorMessages";
import styles from './index.module.css'

const SearchFailedPage = () => {
  // 검색 실패 시, 보이는 에러 페이지
  return (
    <div className={styles.errorContainer}>
      <h2>{ERROR_MESSAGES.SEARCH_FAILED}</h2>
    </div>
  );
};

export default SearchFailedPage;
