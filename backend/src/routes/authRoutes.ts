const express = require('express');
const passport = require('../utils/passport');
const router = express.Router();

router.get('/', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/callback', 
  passport.authenticate('google', {
    successRedirect: 'http://localhost:3000/signup/success',
    failureRedirect: 'http://localhost:3000/signup/failure'
  })
);

module.exports = router;
