const { Schema, model, Schema: {Types: {ObjectId}} } = require('mongoose')

const BooksSchema = new Schema({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  bookAuthor: {
    type: String,
    default: ''
  },
  bookGenre: {
    type: String,
    default: ''
  },
  bookYear: {
    type: Number,
    default: ''
  },
  bookImage: {
    type: String,
    default: ''
  },
  bookLink: {
    type: String,
    default: ''
  },
  userBook: [
    {type: ObjectId, ref: 'users'}
  ]
})
module.exports = model('books', BooksSchema)