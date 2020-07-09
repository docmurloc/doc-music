var express = require('express');
var router = express.Router();

const {
  AlbumModel
} = require("../models/album")

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
  console.log("get random album");
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

router.get('/login', async function(req, res, next) {

  //console.log("register user: ", req);

  let user = await AlbumModel.findOne({pseudo : req.headers.pseudo, password : req.headers.password});

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