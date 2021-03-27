const { Books } = require('../../Models')

const getAllBooks = (req, res) => {
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

const getOneBook = (req, res) => {
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

const addNewBook = (req, res) => {
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

const updateBook = (req, res) => {
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

const deleteBook = (req, res) => {
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
}

const getUserBooks = (req, res) => {
  const idUser = req.params.id
  try{
    Books.find( { booksForUser: idUser } )
    .then(response => {
      res.status(200).json({
        success: true,
        subject: response,
        message: 'Ваши книги'
      })  
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}

const setUserBook = async (req, res) => {
  const { idUser, bookId } = req.body
  try{
    Books.findByIdAndUpdate(bookId,
      { booksForUser: idUser }
    , { new: true })
    .then(response => {
      res.status(200).json({
        message: 'Добавлено',
        success: true,
        subject: response
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}

const deleteUserBook = (req, res) => {
  const { userId, bookId } = req.body
  try{
    Books.updateOne({_id: bookId}, 
      { $pull: { booksForUser: userId } }
    )
    .then(response => {
      res.status(200).json({
        message: 'Удалено',
        success: true,
        subject: bookId
      })
    })
  }catch(err) {
    res.status(400).json({
      message: 'Произошла ошибка.. повторите позже',
      success: false,
      error: err
    })
  }
}

module.exports = { 
  getAllBooks, 
  addNewBook,
  updateBook,
  deleteBook,
  getOneBook,
  getUserBooks,
  setUserBook,
  deleteUserBook
}