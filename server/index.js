const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
// cookieParser = require('cookie-parser')

//######## INITIALIZE APP
const app = express()
//######## CONFIGURATION FILE
dotenv.config({path: path.resolve(__dirname, '.env')})

//######## MIDDLEWARE
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(passport.initialize())
require('./passport')(passport)
// app.use(cookieParser(process.env.SECRET))

//######## DEVELOPMENT MDOE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
//######## ROUTES
const { routes } = require('./src/routes')
routes.forEach((route) => {
  app.use(`/api/${route}`, require(`./src/routes/${route}`))
})
//######## DATABASE CONNECTION
const dbconn = require('./db')
//######## INITIALIZE PORT
const PORT = process.env.PORT || 5000
//######## START APPLICATION
const start = async () => {
  try{
    const conn = await dbconn()
    console.log(`DATABASE SUCCESSFUL CONNECTED ON ${conn.connection.host}`)
    app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
  }catch(e) {
    console.log(e)
  }
}
start()