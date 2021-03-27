const Books = require('../models/books')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginValidation, registerValidation } = require('../policy/user.validation')

exports.getUserBooks = (req, res) => {
  const idUser = req.params.id
  try{
    Books.find( { booksForUser: idUser } )
    .then(response => {
      res.status(200).json({
        success: true,
        subject: response,
        message: 'Ваши книги'
      })  
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}

exports.setUserBook = async (req, res) => {
  const { idUser, bookId } = req.body
  try{
    Books.findByIdAndUpdate(bookId,
      { booksForUser: idUser }
    , { new: true })
    .then(response => {
      res.status(200).json({
        message: 'Добавлено',
        success: true,
        subject: response
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}

exports.deleteUserBook = (req, res) => {
  const { userId, bookId } = req.body
  try{
    Books.updateOne({_id: bookId}, 
      { $pull: { booksForUser: userId } }
    )
    .then(response => {
      res.status(200).json({
        message: 'Удалено',
        success: true,
        subject: bookId
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}


exports.login = (req, res) => {
  const { error } = loginValidation(req)
  if (error) return res.status(400).json({message: error.details[0].message, success: false})
  const { login, password } = req.body
  try{
    User.findOne( { login: login } )
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


exports.register = async (req, res) => {
  const { error } = registerValidation(req)
  if (error) return res.status(400).json({message: error.details[0].message})
  const { name, email, login, password, isAdmin } = req.body
  try{
    const checkLogin = await User.findOne( { login: login } )
    if (checkLogin) return res.status(400).json( { message: 'Данный логин уже используется', success: false } )
    const newUser = new User( { name, email, login, password, isAdmin } )
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