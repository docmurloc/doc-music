var express = require('express');
var router = express.Router();


const {
  UserModel
} = require("../models/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("homePage");
  const answer = "respond  with a resource"
  res.status(200).send({answer : "test"});
});

module.exports = router;
