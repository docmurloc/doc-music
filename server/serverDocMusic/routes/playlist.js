var express = require('express');
var router = express.Router();

const {
  AlbumModel
} = require("../models/album")

const {
  PlaylistModel
} = require("../models/playlist")

const {
  ImageModel
} = require("../models/image")

const {IP_SERVER, PORT_SERVER} = require('../env');
const baseURLImage = 'http://' + IP_SERVER + ':' + PORT_SERVER + '/image/';
const missingImage = '404.png';



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
        artwork: playlist.artwork ? baseURLImage + playlist.artwork : baseURLImage + missingImage,
        trackListId: playlist.trackListId,
    };
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let playlist = req.headers.id != 'null' ? await PlaylistModel.findOne({_id : req.headers.id}) : null;

    if (playlist) {
        const answer = {
          id : playlist._id,
          title: playlist.title,
          author: playlist.author,
          album: playlist.album,
          date: playlist.date,
          artwork: playlist.artwork ? baseURLImage + playlist.artwork : baseURLImage + missingImage,
          trackListId: playlist.trackListId,
      };
      res.status(200).send(answer);
    } else {
      res.status(404).send({error : "playlist not found"});
    }
  });

router.get('/all', async function(req, res, next) {
  let playlists = await PlaylistModel.find({});

  playlists.forEach((playlist) => {
    playlist.artwork = playlist.artwork ? baseURLImage + playlist.artwork : baseURLImage + missingImage;
  })
  res.status(200).send(playlists);
});

router.post('/upload', async function(req, res, next) {


  let image = req.body.playlist_artwork ? await ImageModel.findOne({_id : req.body.playlist_artwork}) : null;


  let playlist = await PlaylistModel.findOne({
    title: req.body.playlist_title,
    author: req.body.playlist_author,
  });

  if (!playlist) {
    playlist = new PlaylistModel({
        title: req.body.playlist_title,
        author: req.body.playlist_author,
        album: req.body.playlist_album ? req.body.playlist_album : null,
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

router.post('/mod', async function(req, res, next) {


  let playlist = req.body.playlist_to_change ? await PlaylistModel.findOne({_id : req.body.playlist_to_change}) : null;

  if (playlist) {

    let image = req.body.playlist_artwork_to_change ? await ImageModel.findOne({_id : req.body.playlist_artwork_to_change}) : null;


    playlist.title = req.body.playlist_title_to_change;
    playlist.artwork = image ? image.url : null;
    playlist.author = req.body.playlist_author_to_change;
    playlist.album = req.body.playlist_album_to_change ? req.body.playlist_album_to_change : null;
    playlist.trackListId = req.body.playlist_trackList_to_change ? req.body.playlist_trackList_to_change : null;
    await playlist.save();
  }

  res.render('playlist', {
    title: 'Doc Music'
  });
 
});

router.post('/delete', async function(req, res, next) {


  let playlist = req.body.playlist_to_delete ? await PlaylistModel.findOne({_id : req.body.playlist_to_delete}) : null;


  if (playlist) {


    let albums = await AlbumModel.find({playListId: req.body.playlist_to_delete});

    albums.forEach((album) => {
      album.playListId = null;
      album.save();

    })


    await playlist.remove();

  }

  res.render('playlist', {
    title: 'Doc Music'
  });
 
});

module.exports = router;