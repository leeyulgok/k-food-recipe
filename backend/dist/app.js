"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('./utils/passport');
const MainRoutes = require('./routes/index');
const searchRoutes = require('./routes/searchRoutes');
const ingredientRoutes = require('./routes/ingredientRoutes');
const cookingMethodRoutes = require('./routes/cookingMethodRoutes');
const authRoutes = require('./routes/authRoutes');
const singupRoutes = require("./routes/signupRoutes");
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    const user = { id: id };
    done(null, user);
});
app.use('/', MainRoutes);
app.use('/list', searchRoutes);
app.use('/list/ingredient/', ingredientRoutes);
app.use('/list/cookingMethod/', cookingMethodRoutes);
app.use('/auth/google/', authRoutes);
app.use(singupRoutes);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
