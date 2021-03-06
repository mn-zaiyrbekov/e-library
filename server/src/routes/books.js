const router = require('express').Router()
const { 
  getUserBooks, deleteUserBook, setUserBook, getAllBooks, 
  addNewBook, updateBook, getOneBook, deleteBook,
  setBooksRating, getBookForGenre, searching
} = require('../controllers/books.controller')

router.route('/')
  .get(getAllBooks)
  .post(addNewBook)
  .put(deleteUserBook)

router.route('/genre/:id')
  .get(getBookForGenre)

router.route('/:id')
  .get(getOneBook)
  .put(updateBook)
  .delete(deleteBook)

router.route('/user')
  .post(setUserBook)

router.route('/user/:id')
  .get(getUserBooks)

router.route('/book/rating/:id')
  .post(setBooksRating)
  
router.route('/book/search')
  .post(searching)
module.exports = router