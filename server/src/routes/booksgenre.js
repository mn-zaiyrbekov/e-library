const router = require('express').Router()
const { addBooksGenre, getAllBookGenre, getOneBookGenre } = require('../controllers/booksgenre.controller')

router.route('/')
  .post(addBooksGenre)
  .get(getAllBookGenre)

router.route('/:id')
  .get(getOneBookGenre)
module.exports = router