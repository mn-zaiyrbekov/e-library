const router = require('express').Router()
const { getAllBooks, addNewBook, updateBook, getOneBook, deleteBook } = require('../controllers/books.controller')

router.route('/')
  .get(getAllBooks)
  .post(addNewBook)

router.route('/:id')
  .get(getOneBook)
  .delete(deleteBook)

router.route('/:id')
  .put(updateBook)
module.exports = router