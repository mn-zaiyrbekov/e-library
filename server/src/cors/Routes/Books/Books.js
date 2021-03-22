const router = require('express').Router()
const { 
  getAllBooks, 
  addNewBook,
  updateBook,
  deleteBook,
  getOneBook,
  setUserBook,
  getUserBooks,
  deleteUserBook
} = require('../../Controllers/BooksController/BooksController')
// const { loginValidation } = require('../../policy/userValidation')


/**
 * @route '/'
 * @description GET ALL BOOKS
 * @method GET
 */
router.get('/', (req, res) => {
  getAllBooks(req, res)
})

/**
 * @route '/ONE'
 * @description GET ON BOOK
 * @method GET
 */
 router.get('/:id', (req, res) => {
  getOneBook(req, res)
})

/**
 * @route '/'
 * @description CREATE NEW BOOK
 * @method POST
 */
router.post('/', (req, res) => {
  addNewBook(req, res)
})


/**
 * @route '/'
 * @description EDITNG BOOK
 * @method PUT
 */
router.put('/:id', (req, res) => {
  updateBook(req, res)
})

/**
 * @route '/:ID'
 * @description 'DELETE BOOK'
 * @method DELETE
 */
router.delete('/:id', (req, res) => {
  deleteBook(req, res)
})


/**
 * @route '/:ID'
 * @description 'GET USER BOOKS'
 * @method GET
 */
 router.get('/user/:id', (req, res) => {
  getUserBooks(req, res)
})

/**
 * @route '/:ID'
 * @description 'SET USER BOOKS'
 * @method GET
 */
 router.post('/user/set', (req, res) => {
  setUserBook(req, res)
})
/**
 * @route '/:ID'
 * @description 'DELETE USER BOOKS'
 * @method DELETE
 */
 router.put('/user/delete', (req, res) => {
  deleteUserBook(req, res)
})

module.exports = router