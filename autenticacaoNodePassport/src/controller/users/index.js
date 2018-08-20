const express = require('express')
const router = express.Router()
const isAuth = require('./../../auth/middleware')

module.exports = (passport) => {

  router.get('/',  require('./all'))
  // router.post('/', require('./create')) // sem o passport
  router.post('/',  passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/users'
  }))
  router.get('/new',  require('./new'))
  router.delete('/:id',  require('./remove'))

  return router
}