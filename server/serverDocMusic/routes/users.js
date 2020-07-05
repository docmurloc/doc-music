var express = require('express');
var router = express.Router();


const {
  UserModel
} = require("../models/user")

/* GET users listing. */
router.get('/', function(req, res, next) {
  // let Test = new UserModel({
  //   pseudo: "testPseudo",
  //   password: "testPassword",
  // });
  // await Test.save();
  console.log("homePage");
  const answer = "respond  with a resource"
  res.status(200).send({answer : "test"});
});

router.post('/register', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({pseudo : req.body.pseudo});

  if (!user) {
    user = new UserModel({
      pseudo: req.body.pseudo,
      password: req.body.password,
    });
    await user.save();
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user allready exist"});
});

router.get('/login', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({pseudo : req.headers.pseudo, password : req.headers.password});

  let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  console.log("token = ", token);

  if (user) {

    await user.updateOne({access_token : token});
    //user = new UserModel({
    //  pseudo: req.body.pseudo,
    //  password: req.body.password,
    //});
    //await user.save();
    return  res.status(200).send({access_token : token});
  }
  return res.status(400).send({status : "wrong input"});
});

module.exports = router;
