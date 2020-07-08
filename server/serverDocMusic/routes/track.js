var express = require('express');
var router = express.Router();

const {
    TrackModel
} = require("../models/track")

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

  let track = await TrackModel.findOne({_id : "5f052e211aa79f5d884c304d"});

    const answer = {
        id : track._id,
        title: track.title,
        artist: track.artist,
        album: track.album,
        genre: track.genre,
        date: track.date,
        artwork: track.artwork,
        url: track.url,
    };
    //await Test.save();
  console.log("get random track");
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let track = await TrackModel.findOne({_id : req.headers.id});
  
      const answer = {
        id : track._id,
        title: track.title,
        artist: track.artist,
        album: track.album,
        genre: track.genre,
        date: track.date,
        artwork: track.artwork,
        url: track.url,
    };
    console.log("get track:", answer);
    res.status(200).send(answer);
  });

router.get('/sound/*.mp3', async function(req, res, next) {
    console.log(req.url);
    let url = req.url;
    let filename = url.substring(url.lastIndexOf("/") + 1, url.length);

    console.log("send track sound:", url);
    res.status(200).send(filename);
});

router.post('/upload', async function(req, res, next) {

  //console.log("register user: ", req);

  let track = await TrackModel.findOne({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
});

  if (!track) {
    track = new TrackModel({
        title: req.body.title,
        date: getDate(),
        artwork: req.body.artwork,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        url: req.body.url,
    });
    await track.save();
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "track already exist"});
});

module.exports = router;