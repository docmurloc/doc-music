var express = require('express');
var router = express.Router();


const {
  UserModel
} = require("../models/user")

router.post('/register', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({pseudo : req.body.pseudo});

  let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  console.log("token = ", token);


  if (!user) {
    user = new UserModel({
      pseudo: req.body.pseudo,
      password: req.body.password,
      access_token: token,
      trackHistoric: [],
      trackFavorite : [],
      trackUnfavorite: [],
      albumFavorite: []
    });
    await user.save();
    return  res.status(200).send({status : "succes", access_token :token});
  }
  return res.status(400).send({status : "user allready exist"});
});

router.post('/add_historic', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {

    let arrayHistory = user.trackHistoric;

    arrayHistory = arrayHistory.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );

    await user.updateOne({trackHistoric : [req.body.trackId, ...arrayHistory]});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/login', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({pseudo : req.headers.pseudo, password : req.headers.password});

  let token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  console.log("token = ", token);

  if (user) {

    await user.updateOne({access_token : token});
    return  res.status(200).send({access_token : token});
  }
  return res.status(400).send({status : "wrong input"});
});

router.get('/historic', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});


  if (user) {
    return  res.status(200).send({trackHistoric : user.trackHistoric});
  }
  return res.status(400).send({status : "user not found"});
});

module.exports = router;

