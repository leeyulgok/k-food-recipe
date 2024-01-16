import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { generateJWT } from './jwt';
const pool = require("../config/dbConfig");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },

    async function (accessToken: string, refreshToken: string | undefined, profile: passport.Profile, done: Function) {
      try {
        const googleId = profile.id;
        const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
        const name = profile.displayName;

        const [user] = await pool.query(`SELECT * FROM users WHERE google_id = ?`, [googleId]);

        if (user.length > 0) {
          const token = generateJWT("failure", false);
          return done(null, false, { message: 'User already exists', token: token});
        } else {
          await pool.query(`INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)`, [googleId, email, name]);
          const token = generateJWT(googleId, true);
          return done(null, { id: googleId, email, name, token: token });
        }
      } catch (error) {
        console.error("Error in Google Strategy:", error);
        done(error, null);
      }
    }
  )
);

module.exports = passport;
