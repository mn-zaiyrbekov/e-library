const router = require('express').Router()
const { response } = require('express')
const { Books } = require('../../models/index')


/**
 * @route '/ADD'
 * @description 'INSERT NEW BOOKS OF DB'
 * @method POST
 */
router.post('/add', (req, res) => {
  const book = req.body
  try{
    new Books(book).save()
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Добавлено',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка при добавлении книги...',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      success: false,
      message: err
    })
  }
})

/**
 * @route '/'
 * @description 'GET ALL BOOKS'
 * @method GET
 */
router.get('/', async (req, res) => {
  let limit = req.query.limit
  const response = await Books.find().limit(Number(limit))
  if (response) {
    res.status(200).json({
      success: true,
      subject: response
    })
  }else{
    res.status(400).json({
      success: false,
      message: 'Произошла неизвестная ошибка...',
      error: err
    })
  }
})


/**
 * @route '/:ID'
 * @description 'GET BOOKS BY ID'
 * @method GET
 */
router.get('/:id', (req, res) => {
  const id = req.params.id
  try{
    Books.findById(id)
    .then(response => {
      res.status(200).json({
        success: true,
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла неизвестная ошибка...',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
})

/**
 * @route '/UPDATE/:ID'
 * @description 'UPDATE BOOKS BY ID'
 * @method PUT
 */
router.put('/update/:id', (req, res) => {
  const id = req.params.id
  const book = req.body
  try{
    Books.findByIdAndUpdate(id, book, {new: true})
    .then(response => {
      res.status(200).json({
        success: true,
        new: true,
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла неизвестная ошибка...',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
})
/**
 * @route '/DELETE/:ID'
 * @description 'DELETE BOOK BY ID'
 * @method DELETE
 */
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  try{
    Books.findByIdAndDelete(id)
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Удалено',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      success: false,
      error: err
    })
  }
})

/**
 * @route '/BOOKS/ADD'
 * @description 'INSERT BOOKS FOR USER'
 * @method POST
 */
 router.post('/addUserBooks', async (req, res) => {
  const {id, bookId} = req.body
  try{
    const response = await Books.findByIdAndUpdate(bookId, {
      $push: {userBook: id}
    }, {new: true})
    if (response) {
      res.status(200).json({
        message: 'Добавлено',
        success: true,
        subject: response
      })
    }
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
})

/**
 * @route '/getUserbooks'
 * @description 'GET USER BOOKS FOR CLIENT'
 * @method GET
 */
 router.get('/getUserbooks/:id', async (req, res) => {
  const idUser = req.params.id
  try{
    const response = await Books.find({userBook: idUser})
    if (response) {
      res.status(200).json({
        success: true,
        subject: response
      })
    }
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
})
module.exports = router