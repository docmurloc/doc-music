var express = require('express');
var router = express.Router();

const {
  AlbumModel
} = require("../models/album")

const {
  UserModel
} = require("../models/user")


function getDate() {
    var pad = function (amount, width) {
     var padding = "";
     while (padding.length < width - 1 && amount < Math.pow(10, width - padding.length - 1))
      padding += "0";
     return padding + amount.toString();
    }
    let date = new Date();
    var offset = date.getTimezoneOffset();
    return pad(date.getFullYear(), 4)
      + "-" + pad(date.getMonth() + 1, 2)
      + "-" + pad(date.getDate(), 2)
      + "T" + pad(date.getHours(), 2)
      + ":" + pad(date.getMinutes(), 2)
      + ":" + pad(date.getSeconds(), 2)
      + "." + pad(date.getMilliseconds(), 3)
      + (offset > 0 ? "-" : "+")
      + pad(Math.floor(Math.abs(offset) / 60), 2)
      + ":" + pad(Math.abs(offset) % 60, 2);
}

/* GET users listing. */
router.get('/random', async function(req, res, next) {

  let nbAlbum = await AlbumModel.count();

  let random = Math.floor(Math.random() * nbAlbum);

  let album = await AlbumModel.findOne().skip(random);

    const answer = {
        id : album._id,
        title: album.title,
        artist: album.artist,
        artwork: album.artwork,
        date: album.date,
        genre: album.genre,
        playListId: album.playListId,
    };
    //await Test.save();
  res.status(200).send(answer);
});


router.get('/id', async function(req, res, next) {

  console.log("get id album", req.headers.id);


  let album = await AlbumModel.findOne({_id : req.headers.id});

    const answer = {
      id : album._id,
      title: album.title,
      artist: album.artist,
      artwork: album.artwork,
      date: album.date,
      genre: album.genre,
      playListId: album.playListId,
  };
  //console.log("get album:", answer);
  res.status(200).send(answer);
});

router.post('/upload', async function(req, res, next) {

  //console.log("register user: ", req);

  let album = await AlbumModel.findOne({
      title: req.body.title,
      artist: req.body.artist,
      trackListId: req.body.trackListId,
    });

  if (!album) {
    album = new AlbumModel({
        title: req.body.title,
        artist: req.body.artist,
        artwork: req.body.artwork,
        date: getDate(),
        genre: req.body.genre,
        playListId: req.body.playListId,
    });
    await album.save();
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "album already exist"});
});

router.post('/add_favorite', async function(req, res, next) {

  console.log("add favorite: ", req.body.trackId);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    await user.updateOne({albumFavorite : [req.body.trackId, ...user.albumFavorite]});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});


router.post('/rem_favorite', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    let arrayFavorite = user.albumFavorite;

    arrayFavorite = arrayFavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({albumFavorite : arrayFavorite});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/favorite', async function(req, res, next) {

  console.log("album favorite: ", req.headers);

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    return  res.status(200).send({albumFavorite : user.albumFavorite});
  }
  return res.status(400).send({status : "user not found"});
});

module.exports = router;