const BooksGenre = require('../models/booksgenre')
const Books = require('../models/books')

exports.addBooksGenre = (req, res) => {
  const genre = req.body
  try{
    const newGenre = new BooksGenre(genre)
    newGenre.save()
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Успешно добавлено',
        subject: response
      })
    })
    .catch(error => {
      res.status(200).json({
        success: false,
        message: 'Произошла ошибка при добавлении',
        error: error
      })
    })
  }catch(e) {
    res.status(400).json({
      success: false,
      message: 'Произошла неизвестная ошибка',
      error: e
    })
  }
}

exports.getAllBookGenre = (req, res) => {
  try{
    BooksGenre.find()
    .then(response => {
      res.status(200).json({
        message: 'Вывод всех жанров',
        success: true,
        subject: response
      })
    })
    .catch(err => {
      res.status(400).json({
        message: 'Ошибка при выводе данных',
        success: false,
        error: err
      })
    })    
  }catch(e) {
    res.status(400).json({
      success: false,
      message: 'Произошла неизвестная ошибка',
      error: e
    })
  }
}
exports.getOneBookGenre = (req, res) => {
  const idGenre = req.params.id
  try{
    BooksGenre.findById(idGenre)
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Ввывод одного жанра',
        subject: response
      })
    })
    .catch(error => {
      res.status(400).json({
        success: false,
        message: 'Не такого жанра',
        error: error
      })
    })
  }catch(e) {
    res.status(400).json({
      success: false,
      message: 'Произошла ошибка при выводе одного жанра',
      error: e
    })
  }
}


exports.countBooksByGenre = async (req, res) => {
  try{
  
    
  }catch(e) {
    res.status(400).json({
      success: false,
      message: 'Произошла неизвестная ошибка при подсчетет данных...',
      error: e
    })
  }
}