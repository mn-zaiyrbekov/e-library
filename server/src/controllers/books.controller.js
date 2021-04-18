const Books = require('../models/books')

exports.getAllBooks = async (req, res) => {
  let limit = req.query.limits
  try{
    Books.find()
    .limit(Number(limit))
    .then(response => {
      books = response
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

exports.getBookForGenre = (req, res) => {
  const genreId = req.params.id
  try{
    Books.find({booksGenre: genreId})
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Вывод книг по жанру',
        subject: response
      })
    })
    .catch(error => {
      res.status(400).json({
        success: true,
        message: 'Произошла ошибка при выводе книг по жанрам',
        error: error
      })
    })
  }catch(e) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при выведении по жанрам',
      error: e
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
        subject: response._id,
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

exports.getUserBooks = (req, res) => {
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

exports.setUserBook = (req, res) => {
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

exports.deleteUserBook = (req, res) => {
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

exports.setBooksRating = async (req, res) => {
  let rating = req.body.rating
  let bookId = req.params.id
  try{
    Books.findByIdAndUpdate(bookId, {
      $push: { rating: rating }
    })
    .then(response => {
      res.status(200).json( { message: 'Рейгинг записан' } )
    })
    .catch(err => {
      res.status(400).json({
        message: 'Не удалось доабвить рейтинг',
        error: err
      })
    })
  }catch(e) {
    res.status(400).json({
      message: 'Невозможно добавить рейтинг..',
      success: false,
      error: e
    })
  }
}


exports.searching = (req, res) => {
  const searchItem = req.body.search
  const queryOptions = {
    $and: [{
      booksTitle: {
        '$regex': '^' + searchItem,
        '$options': 'i'
      }
    }]
  }
  try{
    Books.find(queryOptions)
    .then(data => {
      res.status(200).json({
        message: `Запросы по поиску '${searchItem}'`,
        success: true,
        subject: data
      })
    })
    .catch(error => {
      res.status(422).json({
        message: `Запросы по поиску '${searchItem}' ничего не найдено`,
        success: false,
        error: error
      })
    })
  }catch(e) {
    res.status(400).json({
      message: 'Произошла ошибка при поске книги',
      success: false,
      error: e
    })
  }
}