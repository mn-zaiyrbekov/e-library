const { Users } = require('../../Models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = (req, res) => {
  const { login, password } = req.body
  try{
    Users.findOne( { login: login } )
    .then(user => {
      if(!user) {
        res.status(200).json({
          message: 'Пользователь не найден',
          success: false
        })
      }else{
        bcrypt.compare(password, user.password)
        .then(isMatch => {
          if((isMatch)) {
            const payload = {
              _id: user._id,
              name: user.name,
              email: user.email,
              login: user.login
            }
            jwt.sign(payload, process.env.SECRET, {
              expiresIn: '2h'
            }, (err, token) => {
              res.status(200).json({
                message: 'Успешная аутентификация',
                success: true,
                user: user,
                token: `Bearer ${token}`,
              })
            })
          }else{
            res.status(200).json({
              message: 'Неверный пароль',
              success: false
            })
          }          
        })
      }
    })
  }catch(err) {
    res.status(400).json({
      message: 'Что-то пошло не так..',
      success: false,
      error: err
    })
  }
}

module.exports = login