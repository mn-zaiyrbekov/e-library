const router = require('express').Router()
const { addBooksGenre, getAllBookGenre } = require('../controllers/booksgenre.controller')

router.route('/')
  .post(addBooksGenre)
  .get(getAllBookGenre)


module.exports = router