import React, { useEffect } from 'react';
import styles from "./LoginContainer.module.css";
import LoginButton from "./LoginButton";

const LoginContainer = () => {
  useEffect(() => {
    const fetchSessionMessage = async () => {
      try {
        const response = await fetch('http://localhost:3001/auth/google/session-message', {
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.message) {
            alert(data.message);
          }
          
          await fetch('http://localhost:3001/auth/google/clear-session-message', {
            credentials: 'include'
          });
        }
      } catch (error) {
        console.error('Error fetching session message:', error);
      }
    };

    fetchSessionMessage();
  }, []);

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
