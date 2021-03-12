const passport = require('passport')
const { Users } = require('../../models/index')
const { checkUserOnRegister, checkUserLogin } = require('../../../policy/Validate')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
/**
 * @route '/REGISTER'
 * @description 'REGISTRATION ON NEW USER'
 * @method POST
 */
router.post('/register', async (req, res) => {
  const user = req.body
  const { error } = checkUserOnRegister(user)
  if (error) return res.status(400).json({message: error.details[0].message})
  const checkLogin = await Users.findOne({login: user.login})
  if (checkLogin) return res.status(400).json({message: 'Логин уже используется!', success: false})
  try{
    const newUser = new Users({
      userName: user.userName,
      email: user.email,
      login: user.login,
      password: user.password
    })
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save().then(user => {
          return res.status(201).json({
            success: true,
            message: 'Успешная регистрация!'
          })
        })
      })
    })
  }catch(err) {
    console.log(err)
  }
})
/**
 * @route '/AUTH'
 * @description 'AUTHENTIFICATION ON USER'
 * @method POST
 */
router.post('/auth', (req, res) => {
  const { login, password } = req.body
  const { error } = checkUserLogin({login, password})
  if (error) return res.status(400).json({message: error.details[0].message})
  Users.findOne({
    login: login
  }).then(user => {
    if (!user) {
      res.status(400).json({
        success: false,
        message: 'Пользователь не найден'
      })
    }else{
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if ((isMatch)) {
          const payload = {
            _id: user._id,
            userName: user.userName,
            email: user.email,
            login: user.login
          }
          jwt.sign(payload, process.env.SECRET, {
            expiresIn: 604800
          }, (err, token) => {
            res.status(200).json({
              success: true,
              user: user,
              token: `Bearer ${token}`,
              message: 'Успешная аутентификация!'
            })
          })
        }else{
          res.status(400).json({
            success: false,
            message: 'Не правильный пароль'
          })
        }
      })
    }
  })
  
})
/**
 * @route '/LOGOUT'
 * @description 'DELETE USER INFO LOGOUT'
 * @method GET
 */
router.get('/logout', (req, res) => {
  req.logOut()
  res.send('Logout')
})

/**
 * @route '/PROFILE'
 * @description 'GET INFORMATION OF USER PROFILE'
 * @method GET
 */
router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res) => {
  return res.json({
    user: req.user
  })
})

module.exports = router
