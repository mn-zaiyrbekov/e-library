const { Schema, model, Schema: { Types: {ObjectId} } } = require('mongoose')

const BooksSchema = new Schema({
  booksTitle: { type: String },
  booksDesc: { type: String },
  booksImage: { type: String },
  booksAuthor: { type: String },
  booksYear: { type: String },
  booksLink: { type: String },
  booksGenre: [
    { type: ObjectId, ref: 'booksgenre' }
  ],
  booksForUser: [ {type: ObjectId, ref: 'users' } ],
  createDate: { type: Date, default: Date.now },
  downloads: { type: Number, default: 0 },
  rating: [
    { type: Number, default: 0 }
  ]
})
module.exports = model('books', BooksSchema)