const router = require('express').Router()
const register  = require('../../Controllers/UserController/RegisterController')
const { registerValidation } = require('../../policy/userValidation')


router.post('/', (req, res) => {
  const { error } = registerValidation(req)
  if (error) return res.status(400).json({message: error.details[0].message})
  register(req, res)
})


module.exports = router