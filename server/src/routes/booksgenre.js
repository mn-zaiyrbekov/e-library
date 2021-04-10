const router = require('express').Router()
const { addBooksGenre, getAllBookGenre, getOneBookGenre, countBooksByGenre } = require('../controllers/booksgenre.controller')

router.route('/')
  .post(addBooksGenre)
  .get(getAllBookGenre)

router.route('/:id')
  .get(getOneBookGenre)  
module.exports = router