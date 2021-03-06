const mongoose = require('mongoose')
const schema = mongoose.Schema

const Users = new schema(
  {
    userName: { type: String, require:true },
    email: { type: String, require:true , unique:true , match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/},
    password: { type: String, require:true },
    lastLogin: { type: Date, default: Date.now },
    isConnect: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports= mongoose.model('User',Users );