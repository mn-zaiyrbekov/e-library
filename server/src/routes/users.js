const router = require('express').Router()
const passport = require('passport')
const { login, register, profile } = require('../controllers/user.controller')


router.route('/login')
  .post(login)

router.route('/profile')
  .get(passport.authenticate('jwt', {session: false}), profile)

router.route('/register')
  .post(register)

router.route('/logout')
  .get((req, res) => {
    req.logOut()
    res.send('Logout')
  }) 

module.exports = router