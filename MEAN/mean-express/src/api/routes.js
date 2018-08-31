module.exports = (app) => {

  app.use('/', require('./main'))
  app.use('/posts', require('./posts'))

}