var express = require('express');
var router = express.Router();

const {
  UserModel
} = require("../models/user")

/* GET home page. */
router.get('/', async function (req, res, next) {
 console.log("homePage");
  //res.send('respond with a resource');
  res.render('home', {
    title: 'Doc Music'
  });
});

/* GET home page. */
router.get('/uploadPage', async function (req, res, next) {
  console.log("uploadPage");
   //res.send('respond with a resource');
   res.render('upload', {
     title: 'Doc Music'
   });
 });

 /* GET home page. */
router.get('/playlistPage', async function (req, res, next) {
  console.log("playlistPage");
   //res.send('respond with a resource');
   res.render('playlist', {
     title: 'Doc Music'
   });
 });

 /* GET home page. */
router.get('/albumPage', async function (req, res, next) {
  console.log("albumPage");
   //res.send('respond with a resource');
   res.render('album', {
     title: 'Doc Music'
   });
 });

module.exports = router;