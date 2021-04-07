const { Schema, model } = require('mongoose')

const BooksGenre = new Schema({
  name: { type: String, unique: true, default: 'Литература' }
})

module.exports = model('booksgenre', BooksGenre)