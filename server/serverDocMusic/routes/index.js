var express = require('express');
var router = express.Router();

const {
  UserModel
} = require("../models/user")

router.get('/', async function (req, res, next) {
  res.render('home', {
    title: 'Doc Music'
  });
});

router.get('/uploadPage', async function (req, res, next) {
   res.render('upload', {
    title: 'Doc Music'
  });
});

router.get('/playlistPage', async function (req, res, next) {
   res.render('playlist', {
     title: 'Doc Music'
   });
 });

router.get('/albumPage', async function (req, res, next) {
   res.render('album', {
     title: 'Doc Music'
   });
 });

module.exports = router;