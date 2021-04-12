const router = require('express').Router()
const { addBooksGenre, getAllBookGenre, getOneBookGenre, updateGenreBook } = require('../controllers/booksgenre.controller')

router.route('/')
  .post(addBooksGenre)
  .get(getAllBookGenre)

router.route('/:id')
  .get(getOneBookGenre)  
  .put(updateGenreBook)
module.exports = router