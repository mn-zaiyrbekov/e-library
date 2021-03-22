const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const passport = require('passport')
const cors = require('cors')
// cookieParser = require('cookie-parser')

//######## CONFIGURATION FILE
dotenv.config({path: path.resolve(__dirname, 'config/.env')})

//######## DATABASE CONFIG
const db = require('./config/db')

//######## INITIALIZE APP
const app = express()

//######## MIDDLEWARE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('combined'))
app.use(passport.initialize())
require('./config/passport')(passport)
app.use(cors())
// app.use(cookieParser(process.env.SECRET))

//######## ROUTES
const { routes } = require('./cors/Routes')
routes.forEach((route) => {
  app.use(`/api/${route[0]}/${route[1]}`, 
  require(`./cors/Routes/${route[0]}/${route[1]}`))
})
app.use('*', (req, res) => res.status(404).json({
  error: true,
  404: true
}))

//######## START SERVER
const PORT = process.env.PORT || 8100
const startServer = async () => {
  try{
    const conn = await db()
    console.log(`DATABASE SUCCESSFUL CONNECTED ON ${conn.connection.host}`)
    app.listen(PORT, () => console.log(`SERVER STATED ON PORT ${PORT}`))
  }catch(err) {
    console.log(err)
  }
}
startServer()