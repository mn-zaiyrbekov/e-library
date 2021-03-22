const router = require('express').Router()
const login = require('../../Controllers/UserController/LoginController')
const { loginValidation } = require('../../policy/userValidation')
const passport = require('passport')


router.post('/', (req, res) => {
  const { error } = loginValidation(req)
  if (error) return res.status(400).json({message: error.details[0].message, success: false})
  login(req, res)
})

router.get('/profile', passport.authenticate('jwt', { session: false } ), (req, res) => {
  return res.json({
    user: req.user
  })
})

router.get('/logout', (req, res) => {
  req.logOut()
  res.send('Logout')
})

module.exports = router