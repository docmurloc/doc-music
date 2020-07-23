var express = require('express');
var router = express.Router();

const {
  PlaylistModel
} = require("../models/playlist")


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

  let nbPlaylist = await PlaylistModel.count();

  let random = Math.floor(Math.random() * nbPlaylist);

  let playlist = await PlaylistModel.findOne().skip(random);


    const answer = {
        id : playlist._id,
        title: playlist.title,
        author: playlist.author,
        date: playlist.date,
        album: playlist.album,
        artwork: playlist.artwork,
        trackListId: playlist.trackListId,
    };
    //await Test.save();
  console.log("get random playlist");
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let playlist = await PlaylistModel.findOne({_id : req.headers.id});
  
      const answer = {
        id : playlist._id,
        title: playlist.title,
        author: playlist.author,
        album: playlist.album,
        date: playlist.date,
        artwork: playlist.artwork,
        trackListId: playlist.trackListId,
    };
    console.log("get playlist:", answer);
    res.status(200).send(answer);
  });

router.post('/upload', async function(req, res, next) {

  console.log("register playlist: ", req.body);

  let playlist = await PlaylistModel.findOne({
    title: req.body.title,
    artwork: req.body.artwork,
    author: req.body.author,
    trackListId: req.body.trackListId,
});

  if (!playlist) {
    playlist = new PlaylistModel({
        title: req.body.title,
        author: req.body.author,
        date: getDate(),
        artwork: req.body.artwork,
        trackListId: req.body.trackListId,
    });
    await playlist.save();
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "playlist already exist"});
});

module.exports = router;