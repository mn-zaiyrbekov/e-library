const { Schema, model, Schema: { Types: { ObjectId } } } = require('mongoose')

const BooksGenre = new Schema({
  name: { type: String, unique: true, default: 'Литература' },
  test: [ { type: ObjectId } ]
})

module.exports = model('booksgenre', BooksGenre)