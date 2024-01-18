import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { handleSignup, handleLogin } from './handlePassport';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret';

passport.use('google-signup', new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/signup/callback",
},
  async function (accessToken: string, refreshToken: string | undefined, profile: passport.Profile, done: Function) {
    const googleId = profile.id;
    const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
    const name = profile.displayName;
    handleSignup(googleId, email, name, done);
  }
));

passport.use('google-login', new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3001/auth/google/login/callback",
},
  async function (accessToken: string, refreshToken: string | undefined, profile: passport.Profile, done: Function) {
    const googleId = profile.id;
    const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
    const name = profile.displayName;
    handleLogin(googleId, email, name, done);
  }
));

module.exports = passport;
