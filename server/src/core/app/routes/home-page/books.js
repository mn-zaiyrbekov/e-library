const router = require('express').Router()
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
        message: 'Удалено'
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

module.exports = router