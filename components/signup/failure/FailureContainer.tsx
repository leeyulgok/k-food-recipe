import styles from './FailureContainer.module.css';
import Failed from "@/components/icons/Failed";
import { useRouter } from 'next/router';

const FailureContainer = () => {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <main className={styles.failureContainer}>
      <div className={styles.failureBox}>
        <div className={styles.checkIcon}>
          <Failed />
        </div>
        <div>
          <h1 className={styles.failureTitle}>
            Unfortunately, you didn't succeed in signing up 
          </h1>
          <div>
            <button className={styles.signupButton} onClick={handleSignup}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FailureContainer;
