const BooksGenre = require('../models/booksgenre')

exports.addBooksGenre = (req, res) => {
  const nameGenre = req.body
  try{
    const genre = new BooksGenre(nameGenre)
    genre.save()
    .then(response => {
      res.status(200).json({
        success: true,
        message: 'Успешно добавлено',
        name: response
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
        success: true,
        message: 'Вывод всех жанров',
        name: response
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