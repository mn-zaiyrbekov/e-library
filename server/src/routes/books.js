const router = require('express').Router()
const { 
  getUserBooks, deleteUserBook, setUserBook, getAllBooks, 
  addNewBook, updateBook, getOneBook, deleteBook 
} = require('../controllers/books.controller')

router.route('/')
  .get(getAllBooks)
  .post(addNewBook)
  .put(deleteUserBook)

router.route('/:id')
  .get(getOneBook)
  .put(updateBook)
  .delete(deleteBook)

router.route('/user')
  .post(setUserBook)

router.route('/user/:id')
  .get(getUserBooks)

module.exports = router