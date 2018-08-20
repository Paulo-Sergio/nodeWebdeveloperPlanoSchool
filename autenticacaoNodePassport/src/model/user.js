const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
require('mongoose-type-email')

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

/** 
 * Criando methods cunstomizados para a model de User.
 */

/** Necessario para encriptar com bcrypt-nodejs */
User.methods.genHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null)
}

/** Necessario para validar password com o banco */
User.methods.validate = (password, callback) => {
  return bcrypt.compare(password, this.password, callback)
}

module.exports = mongoose.model('User', User)