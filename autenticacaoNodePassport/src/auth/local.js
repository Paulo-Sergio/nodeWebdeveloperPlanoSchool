/**
 * Configurando e adequando o Passport a realidade do sistema
 */

const LocalStrategy = require('passport-local')
const User = require('./../model/user')

module.exports = (passport) => {

  /**
   * Serialização do meu Usuário para formar a minha sessão
   */
  passport.serializeUser((user, callback) => {
    return callback(null, user._id)
  })

  /**
   * Deserialização para capturar os dados da sessão para trabalhar com os dados do Usuário
   */
  passport.deserializeUser((id, callback) => {
    User
      .findById(id)
      .then((user) => callback(null, user))
      .catch((err) => callback(err, {}))
  })

  /**
   * Estrategia Passport para registro de novo Usuário
   */
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // req é "espelhada" da requisição (req.body)
  }, function (req, username, password, callback) {
    User
      .findOne({ username: username })
      .then((userExists) => {
        if (!userExists) {
          let user = new User(req.body)

          user.password = user.genHash(user.password) // criptografando senha com bycrpt

          return user
            .save()
            .then((user) => {
              return callback(null, user)
            })
            .catch((error) => {
              console.log(error)
              return
            })
        }
        return callback(null, false) // username já existe (unique)
      })
      .catch((err) => {
        return callback(err, false)
      })
  }))

  /**
   * Estrategia Passport para autenticação
   */
  passport.use('local-signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true // req é "espelhada" da requisição (req.body)
  }, function (req, username, password, callback) {
    User
      .findOne({ username: username })
      .then((user) => {
        if (!user) {
          return callback(null, false) // username não existe
        }

        user.validate(password, (err, result) => {
          if (!result || err) {
            return callback(null, false) // password incorreto
          }

          return callback(null, user)
        })
      })
  }))
}