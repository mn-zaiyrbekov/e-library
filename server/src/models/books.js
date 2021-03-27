const { Schema, model, Schema: { Types: {ObjectId} } } = require('mongoose')

const BooksSchema = new Schema({
  booksTitle: { type: String },
  booksDesc: { type: String },
  booksImage: { type: String },
  booksAuthor: { type: String },
  booksYear: { type: String },
  booksLink: { type: String },
  booksGenre: { type: String },
  booksForUser: [ {type: ObjectId, ref: 'user' } ],
  createDate: { type: Date, default: Date.now },
  downloads: { type: Number, default: 0 },
})
module.exports = model('books', BooksSchema)