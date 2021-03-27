const mongoose = require('mongoose')
const DB_URI = process.env.MONGO_URI
module.exports = async () => {
  try{
    const connect = await mongoose.connect(DB_URI, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    return connect
  }catch(err) {
    console.log(err)
  }
}