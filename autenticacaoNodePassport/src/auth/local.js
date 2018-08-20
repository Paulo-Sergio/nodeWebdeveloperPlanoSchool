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
   * Adequando parte de registro de um novo Usuário
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

          user.password = user.genHash(user.password)

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

        return callback(null, false)
      })
      .catch((err) => {
        return callback(err, false)
      })
  }))
}