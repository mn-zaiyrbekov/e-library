const { Schema, model, Schema: {Types: {ObjectId}} } = require('mongoose')

const UserSchema = new Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  login: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  books: [
    { 
      type: ObjectId, 
      ref: 'books'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('users', UserSchema)