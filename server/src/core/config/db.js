const { 
  mongoose
} = require('./initialize')

const Db = process.env.DB_URI
module.exports = () => {
  mongoose.connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(conn => console.log(`MongoDB success connect ${conn.connection.host}`))
  .catch(err => console.log(err))
}
