const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db')

// create a schema
const userSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: 'Information is not filled' },
  aboutMe: {
    type: String,
    default: 'Information is not filled'
  },
  favorit: {
    type: Array,
    default: [
      {
        films: {
          type: String,
          default: 'Information is not filled'
        }
      },
      {
        music: {
          type: String,
          default: 'Information is not filled'
        },
      },
      {
        books: {
          type: String,
          default: 'Information is not filled'
        },
      }
    ]
  },
  subscriptions: {
    type: Array,
    default: ['No one subscription']
  },
  joined: {
    type: Date,
    default: Date.now
  },
  city: {
    type: String,
    default: 'Information is not filled'
  },
  posts: {
    type: Array,
    default: ['No one post']
  },
  site: {
    type: String,
    default: 'Information is not filled'
  }

}, { collection : 'users' });

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByLogin = function(login, cb) {
  const query = {login: login};
  User.findOne(query, cb);
};

module.exports.getUserById = function(id, cb) {
  User.findById(id, cb);
};

module.exports.addUser = function(newUser, cb) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err)  throw err;
      newUser.password = hash;
      newUser.save(cb);
    });
  });
};

module.exports.comparePass = function(passFromUser, userDBPass, cb) {
  bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
    if(err)  throw err;
    cb(null, isMatch);
  });
};


