const { Schema, model, Schema: { Types: {ObjectId} } } = require('mongoose')

const UserSchema = new Schema({
  name: { type: String },
  email: { type: String },
  login: { type: String, unique: true },
  password: { type: String },
  books: [ {type: ObjectId, ref: 'books' } ],
  createDate: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
})
module.exports = model('users', UserSchema)