var express = require('express');
var router = express.Router();

const {
  UserModel
} = require("../models/user")

/* GET home page. */
router.get('/', async function (req, res, next) {
 // let Test = new UserModel({
 //   pseudo: "testPseudo",
 //   password: "testPassword",
 // });
 // await Test.save();
 console.log("homePage");
  //res.send('respond with a resource');
  res.render('index', {
    title: 'Doc Music'
  });
});

module.exports = router;