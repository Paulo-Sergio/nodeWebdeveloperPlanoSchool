const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const passport = require('passport')

const app = express()

/** PASSPORT BASIC */
//passport.use(require('./src/auth/basic'))
//app.get('*', passport.authenticate('basic', { session: false }))

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(methodOverride('_method'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/routes')(app)

mongoose.connect('mongodb://localhost:27017/authNodePassport')
mongoose.Promise = global.Promise

app.listen(3000, () => {
  console.log('Express started')
})