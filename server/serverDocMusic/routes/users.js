var express = require('express');
var router = express.Router();


const {
  UserModel
} = require("../models/user")

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

router.post('/add_historic', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    await user.updateOne({trackHistoric : [req.body.trackId, ...user.trackHistoric]});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/add_favorite', async function(req, res, next) {

  console.log("add favorite: ", req.body.trackId);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    await user.updateOne({trackFavorite : [req.body.trackId, ...user.trackFavorite]});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/add_unfavorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    await user.updateOne({trackUnfavorite : [req.body.trackId, ...user.trackUnfavorite]});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/rem_favorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    let arrayFavorite = user.trackFavorite;

    arrayFavorite = arrayFavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({trackFavorite : arrayFavorite});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/rem_unfavorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    let arrayUnfavorite = user.trackUnfavorite;

    arrayUnfavorite = arrayUnfavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({trackUnfavorite : arrayUnfavorite});
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

router.get('/favorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    console.log("favorite user: ", {trackFavorite : user.trackFavorite});


    return  res.status(200).send({trackFavorite : user.trackFavorite});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/unfavorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    return  res.status(200).send({trackUnfavorite : user.trackUnfavorite});
  }
  return res.status(400).send({status : "user not found"});
});



module.exports = router;
