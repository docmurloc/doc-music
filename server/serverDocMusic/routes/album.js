var express = require('express');
var router = express.Router();

const {
  AlbumModel
} = require("../models/album")

const {
  UserModel
} = require("../models/user")

const {
  PlaylistModel
} = require("../models/playlist")

const {
  ImageModel
} = require("../models/image")

const {
  TrackModel
} = require("../models/track")

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

  let nbAlbum = await AlbumModel.count();

  let random = Math.floor(Math.random() * nbAlbum);

  let album = await AlbumModel.findOne().skip(random);

    const answer = {
        id : album._id,
        title: album.title,
        artist: album.artist,
        artwork: album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage,
        date: album.date,
        genre: album.genre,
        playListId: album.playListId,
        like: album.like
    };
  res.status(200).send(answer);
});


router.get('/randomList', async function(req, res, next) {


  if (req.headers.nbrand < 1) {
    res.status(400).send([]);
  }

  let nbAlbum = await AlbumModel.count();

  let answer = [];
  let randomList = [];

  let random = 0;
  let album = null;


  while (answer.length < req.headers.nbrand && answer.length < nbAlbum) {

    random = Math.floor(Math.random() * nbAlbum);

    if (!randomList.includes(random)) {
      album = await AlbumModel.findOne().skip(random);
      answer.push(album._id);
      randomList.push(random);
    }
  }

  res.status(200).send(answer);
});


router.get('/id', async function(req, res, next) {

  let album = await AlbumModel.findOne({_id : req.headers.id});

    const answer = {
      id : album._id,
      title: album.title,
      artist: album.artist,
      artwork: album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage,
      date: album.date,
      genre: album.genre,
      playListId: album.playListId,
      like: album.like,
  };
  res.status(200).send(answer);
});

router.get('/all', async function(req, res, next) {
  let albums = await AlbumModel.find({});

  albums.forEach((album) => {
    album.artwork = album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage;
  })
  res.status(200).send(albums);
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

router.get('/research', async function(req, res, next) {

    const titleString = escapeRegExp(req.headers.title);

    let albumResult = await AlbumModel.find({title : new RegExp('^.*'+titleString+'.*$', "i")}).limit(6);
  
    res.status(200).send(albumResult);
});

router.get('/recent', async function(req, res, next) {
  let albums = await AlbumModel.find().sort({ _id: -1 }).limit(6);

  albums.forEach((album) => {
    album.artwork = album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage;
  })
  res.status(200).send(albums);
});

router.get('/top', async function(req, res, next) {
  let albums = await AlbumModel.find().sort({ like: -1 }).limit(6);

  albums.forEach((album) => {
    album.artwork = album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage;
  })
  res.status(200).send(albums);
});

router.get('/genre', async function(req, res, next) {
  let albums = await AlbumModel.find({genre : req.headers.genre}).sort({ like: -1 }).limit(6);

  albums.forEach((album) => {
    album.artwork = album.artwork ? baseURLImage + album.artwork : baseURLImage + missingImage;
  })
  res.status(200).send(albums);
});

async function linkAlbumPlaylist(idAlbum, idPlaylist) {

  let album = idAlbum ? await AlbumModel.findOne({_id : idAlbum}) : null;
  let playlist = idPlaylist ? await PlaylistModel.findOne({_id : idPlaylist}) : null;

  if (album && playlist) {
    playlist.album = idAlbum;
    album.playListId = idPlaylist;

    if(playlist.trackListId) {
      playlist.trackListId.forEach(async (trackID) => {
        let track = await TrackModel.findOne({_id : trackID});

        track.album = req.body.album_to_link;
        await track.save();
      })
    }

    await album.save();
    await playlist.save();
  }

}

router.post('/upload', async function(req, res, next) {


  let image = req.body.album_artwork ? await ImageModel.findOne({_id : req.body.album_artwork}) : null;


  let album = await AlbumModel.findOne({
      title: req.body.album_title,
      artist: req.body.album_author,
    });

  if (!album) {
    album = new AlbumModel({
        title: req.body.album_title,
        artist: req.body.album_author,
        artwork: image ? image.url : null,
        date: getDate(),
        genre: req.body.album_genre,
        playListId: req.body.album_playlist ? req.body.album_playlist : null,
        like: 0,
    });
    await album.save();
  }
  return res.render('album', {
    title: 'Doc Music'
  });
});

router.post('/link', async function(req, res, next) {


  await linkAlbumPlaylist(req.body.album_to_link, req.body.playlist_to_link);

  return res.render('album', {
    title: 'Doc Music'
  });
});

router.post('/mod', async function(req, res, next) {


  let album = req.body.album_to_change ? await AlbumModel.findOne({_id : req.body.album_to_change}) : null;

  if (album) {

    let image = req.body.album_artwork_to_change ? await ImageModel.findOne({_id : req.body.album_artwork_to_change}) : null;

    album.title = req.body.album_title_to_change;
    album.artist = req.body.album_author_to_change;
    album.artwork = image ? image.url : null;
    album.genre = req.body.album_genre_to_change;
    album.playListId = req.body.album_playlist_to_change ? req.body.album_playlist_to_change : null;
    await album.save();

    await linkAlbumPlaylist(req.body.album_to_change, req.body.album_playlist_to_change);

  }

  res.render('album', {
    title: 'Doc Music'
  });
 
});

router.post('/delete', async function(req, res, next) {


  let album = req.body.album_to_delete ? await AlbumModel.findOne({_id : req.body.album_to_delete}) : null;



  if (album) {


    let playlists = await PlaylistModel.find({album: req.body.album_to_delete});
    let tracks = await TrackModel.find({album: req.body.album_to_delete});

    playlists.forEach((playlist) => {
      playlist.album = null;
      playlist.save();

    })


    tracks.forEach((track) => {
      track.album = null;
      track.save();

    })


    await album.remove();

  }

  res.render('album', {
    title: 'Doc Music'
  });
 
});

router.post('/add_favorite', async function(req, res, next) {


  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let album = await AlbumModel.findOne({_id : req.body.trackId});

  if (user) {
    await user.updateOne({albumFavorite : [req.body.trackId, ...user.albumFavorite]});
    await album.updateOne({like: album.like + 1});
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});


router.post('/rem_favorite', async function(req, res, next) {


  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let album = await AlbumModel.findOne({_id : req.body.trackId});


  if (user) {
    let arrayFavorite = user.albumFavorite;

    arrayFavorite = arrayFavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({albumFavorite : arrayFavorite});
    await album.updateOne({like: album.like - 1});

    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/favorite', async function(req, res, next) {


  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    return  res.status(200).send({albumFavorite : user.albumFavorite});
  }
  return res.status(400).send({status : "user not found"});
});

module.exports = router;