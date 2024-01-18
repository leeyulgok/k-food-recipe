const pool = require("../config/dbConfig");
import { generateJWT, generateLoginJWT } from "./jwt";

export async function handleSignup(
  googleId: string,
  email: string | null,
  name: string,
  done: Function
) {
  try {
    const [user] = await pool.query(`SELECT * FROM users WHERE google_id = ?`, [
      googleId,
    ]);

    if (user.length > 0) {
      const token = generateJWT("failure", false);
      return done(null, false, {
        message: "User already exists",
        token: token,
      });
    } else {
      await pool.query(
        `INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)`,
        [googleId, email, name]
      );
      const token = generateJWT(googleId, true);
      return done(null, { google_id: googleId, email, name, token: token });
    }
  } catch (error) {
    console.error("Error in signup process:", error);
    done(error, null);
  }
}

export async function handleLogin(
  googleId: string,
  email: string | null,
  name: string,
  done: Function
) {
  try {
    const [user] = await pool.query(`SELECT * FROM users WHERE google_id = ?`, [
      googleId,
    ]);

    if (user.length > 0) {
      const token = generateLoginJWT(user[0].google_id, true);
      return done(null, { ...user[0], token: token });
    } else {
      return done(null, false, { message: "User does not exist" });
    }
  } catch (error) {
    console.error("Error in login process:", error);
    done(error, null);
  }
}
