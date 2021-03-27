const joi = require('joi')


const registerValidation = req => {
  const schema = joi.object().keys({
    name: joi.string().required().min(3).messages({
      'string.empty': 'Имя не может быть пустым',
      'string.min': 'Минимальная длина имени не менее 3 - х символов'
    }),
    email: joi.string().email().required().min(3).messages({
      'string.empty': 'E-mail не может быть пустым',
      'string.email': 'Введите корректный E-mail',
      'string.min': 'Минимальная длина поле E-mail не менее 3 символов'
    }),
    login: joi.string().required().min(4).messages({
      'string.empty': 'Логин не может быть пустым',
      'string.min': 'Минимальная длина логина не менее 4 символов'
    }),
    password: joi.string().required().min(5).messages({
      'string.empty': 'Пароль не может быть пустым. Пожалуйста, заполните!',
      'string.min': 'Минимальная длина пароля не менее 5 символов'
    })
  })
  const userInfo = {
    name: req.body.name,
    email: req.body.email,
    login: req.body.login,
    password: req.body.password
  }
  return schema.validate(userInfo)
}

const loginValidation = req => {
  const schema = joi.object().keys({
    login: joi.string().required().min(4).messages({
      'string.empty': 'Логин не может быть пустым',
      'string.min': 'Минимальная длина логина не менее 4 символов'
    }),
    password: joi.string().required().min(5).messages({
      'string.empty': 'Пароль не может быть пустым. Пожалуйста, заполните!',
      'string.min': 'Минимальная длина пароля не менее 5 символов'
    })
  })
  const userInfo = {
    login: req.body.login,
    password: req.body.password
  }
  return schema.validate(userInfo)
}


module.exports = { registerValidation, loginValidation }
