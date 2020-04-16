const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

router.post('/userEdit', (req, res) => {
  let changedUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    id: req.body.id,
    photo: req.body.photo,
    aboutMe: req.body.aboutMe,
    favorit: req.body.favorit,
    subscriptions: req.body.subscriptions,
    city: req.body.city,
    posts: req.body.posts,
    site: req.body.site,
  };
  console.log(changedUser);
  User.update(
    {_id : changedUser.id},
    {$set: {
      firstName: changedUser.firstName,
      lastName: changedUser.lastName,
      email : changedUser.email,
      photo: changedUser.photo,
      aboutMe: changedUser.aboutMe,
      favorit: changedUser.favorit,
      subscriptions: changedUser.subscriptions,
      city: changedUser.city,
      posts: changedUser.posts,
      site: changedUser.site,
    }}, (err, user) => {
    if(err) throw err;

    User.findById(changedUser.id, (err, user) => {
      return res.json({
        success: true,
        msg: "Такой пользователь был не найден",
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          id: user.id,
          photo: user.photo,
          aboutMe: user.aboutMe,
          favorit: user.favorit,
          subscriptions: user.subscriptions,
          city: user.city,
          posts: user.posts,
          site: user.site,
          joined: user.joined
        }
      });
    })
  });
});

module.exports = router;
