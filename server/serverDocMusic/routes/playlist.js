var express = require('express');
var router = express.Router();

const {
  PlaylistModel
} = require("../models/playlist")

const {
  ImageModel
} = require("../models/image")

const {IP_SERVER, PORT_SERVER} = require('../env');
const baseURLImage = 'http://' + IP_SERVER + ':' + PORT_SERVER + '/image/';


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
        artwork: baseURLImage + playlist.artwork,
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
        artwork: baseURLImage + playlist.artwork,
        trackListId: playlist.trackListId,
    };
    console.log("get playlist:", answer);
    res.status(200).send(answer);
  });

router.get('/all', async function(req, res, next) {
  let playlists = await PlaylistModel.find({});

  playlists.forEach((image) => {
    image.artwork = baseURLImage + image.artwork;
  })
  //console.log("get image all:", images);
  res.status(200).send(playlists);
});

router.post('/upload', async function(req, res, next) {

  console.log("register playlist: ", req.body);

  let image = req.body.playlist_artwork ? await ImageModel.findOne({_id : req.body.playlist_artwork}) : null;


  let playlist = await PlaylistModel.findOne({
    title: req.body.playlist_title,
    author: req.body.playlist_author,
  });

  if (!playlist) {
    playlist = new PlaylistModel({
        title: req.body.playlist_title,
        author: req.body.playlist_author,
        album: req.body.playlist_album,
        date: getDate(),
        artwork: image ? image.url : null,
        trackListId: req.body.playlist_trackList,
    });
    await playlist.save();
  }
  return res.render('playlist', {
    title: 'Doc Music'
  });
});

module.exports = router;