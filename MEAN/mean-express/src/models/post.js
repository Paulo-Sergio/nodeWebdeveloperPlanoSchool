const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({

  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: new Date()
  }

})

module.exports = mongoose.model('Post', Post)