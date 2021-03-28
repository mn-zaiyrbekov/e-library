const router = require('express').Router()
const passport = require('passport')
const { getUserBooks, deleteUserBook, setUserBook, login, register } = require('../controllers/user.controller')

router.route('/')
  .post(setUserBook)
  .put(deleteUserBook)

router.route('/:id')
  .get(getUserBooks)

router.route('/login')
  .post(login)

router.route('/profile')
  .get(passport.authenticate('jwt', { session: false } ), (req, res) => {
    return res.json({
      user: req.user
    })
  })

router.route('/register')
  .post(register)

router.route('/logout')
  .get((req, res) => {
    req.logOut()
    res.send('Logout')
  }) 

module.exports = router
