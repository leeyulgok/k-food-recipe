import styles from './SuccessContainer.module.css';
import Check from "@/components/icons/Check";
import { useRouter } from 'next/router';

const SuccessContainer = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <main className={styles.successContainer}>
      <div className={styles.successBox}>
        <div className={styles.checkIcon}>
          <Check />
        </div>
        <div>
          <h1 className={styles.successTitle}>
            Congratulations! You have successfully signed up.
          </h1>
          <div>
            <button className={styles.loginButton} onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuccessContainer;
