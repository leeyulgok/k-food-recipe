"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_1 = __importDefault(require("passport"));
const pool = require("../config/dbConfig");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your-google-client-id';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your-google-client-secret';
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
}, function (accessToken, refreshToken, profile, done) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const googleId = profile.id;
            const email = profile.emails && profile.emails.length > 0 ? profile.emails[0].value : null;
            const name = profile.displayName;
            const [user] = yield pool.query(`SELECT * FROM users WHERE google_id = ?`, [googleId]);
            if (user.length > 0) {
                return done(null, false, { message: 'User already exists' });
            }
            else {
                yield pool.query(`INSERT INTO users (google_id, email, name) VALUES (?, ?, ?)`, [googleId, email, name]);
                return done(null, { id: googleId, email, name });
            }
        }
        catch (error) {
            console.error("Error in Google Strategy:", error);
            done(error, null);
        }
    });
}));
module.exports = passport_1.default;
