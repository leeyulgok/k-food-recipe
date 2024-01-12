import SignupButton from "./SignupButton";
import styles from "./SignupContainer.module.css";

const SignupContainer = () => {
  return (
    <main className={styles.container}>
      <div className={styles.signupBox}>
        <h2>Sign up</h2>
        <div className={styles.signupButtonBox}>
          <SignupButton />
        </div>
      </div>
    </main>
  );
};

export default SignupContainer;
