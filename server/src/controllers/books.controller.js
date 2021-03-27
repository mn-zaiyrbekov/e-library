const Books = require('../models/books')

exports.getAllBooks = (req, res) => {
  let limit = req.query.limits
  try{
    Books.find()
    .limit(Number(limit))
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Вывод всех книг',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка..',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла неизвестная ошибка',
      error: err
    })
  }
}

exports.getOneBook = (req, res) => {
  const bookId = req.params.id
  try{
    Books.findOne( { _id: bookId } )
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Вывод одной книги',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка..',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла неизвестная ошибка',
      error: err
    })
  }
}

exports.addNewBook = (req, res) => {
  const book = req.body
  try{
    const newBook = new Books(book)
    newBook.save()
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Успешно добавлено!',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка..',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла неизвестная ошибка',
      error: err
    })
  }
}

exports.updateBook = (req, res) => {
  const book = req.body
  const id = req.params.id
  try{
    Books.findByIdAndUpdate(id, book, { new: true } )
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Успешно отредактировано!',
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        message: 'Произошла ошибка..',
        error: err
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла неизвестная ошибка',
      error: err
    })
  }
}

exports.deleteBook = (req, res) => {
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
}
