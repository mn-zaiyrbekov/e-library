const { 
  express, 
  PORT, 
  http,
  morgan,
  bodyParser,
  cors,
  passport
} = require('./config/initialize')

// ### INITIALIZE APPLICATION
const app = express()


// MIDDLEWARE
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(passport.initialize())
require('./config/passport')(passport)

// ### ROUTES
const { routes } = require('./app/routes/index')
routes.forEach((route) => {
  app.use(`/api/${route[0]}/${route[1]}`, require(`./app/routes/${route[0]}/${route[1]}`))
})


// ### SERVER STARTED
const start = () => {
  try {
    require('./config/db')()
    http.createServer({}, app).listen(PORT, console.log(`Server started on PORT ${PORT}`))
  }catch(err) {
    console.log(err)
  }
}

module.exports = { start }
