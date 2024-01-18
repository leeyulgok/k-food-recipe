import React from "react";
import styles from "./LoginContainer.module.css";
import LoginButton from "./LoginButton";

const LoginContainer = () => {
  return (
    <main className={styles.container}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <div className={styles.loginButtonBox}>
          <a href="http://localhost:3001/auth/google/login">
            <LoginButton />
          </a>
        </div>
        <div className={styles.signinBox}>
          <h4>Aren't you a member?</h4>
          <h4>Going to register</h4>
        </div>
      </div>
    </main>
  );
};

export default LoginContainer;
