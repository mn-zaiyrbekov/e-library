const joi = require('joi')

const checkUserOnRegister = data => {
  const user = joi.object().keys({
    userName: joi.string().required().min(3).messages({
      'string.empty': 'Имя не может быть пустым',
      'string.min': 'Минимальная длина имени 3 символа'
    }),
    email: joi.string().email().required().messages({
      'string.email': 'Введите корректный E-mail адрес!',
      'string.empty': 'E-mail адрес не может быть пустым',
    }),
    login: joi.string().required().min(4).messages({
      'string.min': 'Минимальная длина логина 4 символа',
      'string.empty': 'Логин не может быть пустым',
    }),
    password: joi.string().required().min(5).messages({
      'string.bas': 'Пароль должен состоять из текста',
      'string.empty': 'Пароль не может быть пустым',
      'string.min': 'Минимальная длина пароля 5 символа'
    })
  })
  return user.validate(data)
}

const checkUserLogin = ({login, password}) => {
  const user = joi.object().keys({
    login: joi.string().required().min(4).messages({
      'string.empty': 'Логин не может быть пустым',
    }),
    password: joi.string().required().min(5).messages({
      'string.empty': 'Пароль не может быть пустым',
      'string.min': 'Минимальная длина пароля 5 символа'
    })
  })
  return user.validate({login, password})
}

module.exports.checkUserOnRegister = checkUserOnRegister
module.exports.checkUserLogin = checkUserLogin