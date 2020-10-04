const {Schema, model} = require('mongoose')

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fio: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 25
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
})

module.exports = model('User', userSchema)