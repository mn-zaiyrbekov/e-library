const { Users } = require('../../Models')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
  const { name, email, login, password, isAdmin } = req.body
  try{
    const checkLogin = await Users.findOne( { login: login } )
    if (checkLogin) return res.status(400).json( { message: 'Данный логин уже используется', success: false } )
    const newUser = new Users( { name, email, login, password, isAdmin } )
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err
        newUser.password = hash
        newUser.save()
        .then(response => {
          res.status(200).json({
            message: 'Регистрация прошла успешно!',
            success: true,
            subject: response
          })
        })
        .catch(err => {
          res.status(200).json({
            message: 'Регистрация не удалась',
            success: false,
            error: err
          })
        })
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Что-то пошло не так..',
      success: false,
      error: err
    })
  }
}

module.exports = register