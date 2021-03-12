const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const http = require('http')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
dotenv.config({path: path.join(__dirname, 'config.env')})
const passport = require('passport')
const PORT = process.env.PORT || 5100
module.exports = {
  express,
  path ,
  PORT,
  http,
  mongoose,
  morgan,
  bodyParser,
  cors,
  passport
}