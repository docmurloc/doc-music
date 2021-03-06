var express = require('express');
const formidable = require('formidable');
var router = express.Router();

const {IP_SERVER, PORT_SERVER} = require('../env');

const baseURLImage = 'http://' + IP_SERVER + ':' + PORT_SERVER + '/image/';
const baseURLTrack = 'http://' + IP_SERVER + ':' + PORT_SERVER + '/track/';
const missingImage = '404.png';


const {
  ImageModel
} = require("../models/image")

const {
    TrackModel
} = require("../models/track")

const {
  PlaylistModel
} = require("../models/playlist")

const {
  UserModel
} = require("../models/user")

var fs = require('fs');


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
    let nbTrack = await TrackModel.count();

    let random = Math.floor(Math.random() * nbTrack);

    let track = await TrackModel.findOne().skip(random);

    const answer = {
        id : track._id,
        title: track.title,
        artist: track.artist,
        album: track.album,
        genre: track.genre,
        date: track.date,
        artwork: track.artwork ? baseURLImage + track.artwork : baseURLImage + missingImage,
        url: baseURLTrack + track.url,
    };
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
        artwork: track.artwork ? baseURLImage + track.artwork : baseURLImage + missingImage,
        url: baseURLTrack + track.url,
    };
    res.status(200).send(answer);
  });

router.get('/all', async function(req, res, next) {
  let tracks = await TrackModel.find({});

  tracks.forEach((track) => {
    track.artwork = track.artwork ? baseURLImage + track.artwork : baseURLImage + missingImage;
    track.url = baseURLTrack + track.url;
  })

  res.status(200).send(tracks);
});

router.get('/top', async function(req, res, next) {
  let tracks = await TrackModel.find({}).sort({ like: -1 }).limit(6);

  tracks.forEach((track) => {
    track.artwork = track.artwork ? baseURLImage + track.artwork : baseURLImage + missingImage;
    track.url = baseURLTrack + track.url;
  })

  res.status(200).send(tracks);
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

router.get('/research', async function(req, res, next) {

    const titleString = escapeRegExp(req.headers.title);

    let trackResult = await TrackModel.find({title : new RegExp('^.*'+titleString+'.*$', "i")}).limit(6);
  
    res.status(200).send(trackResult);
});

router.post('/upload', async function(req, res, next) {


  const form = formidable({ multiples: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }

    let track = await TrackModel.findOne({
      title: fields.track_title,
      artist: fields.track_artist,
      album: fields.track_album,
    });

    if (track) {
      return res.status(400).send({status : "track already exist"});
    }

    var nameFile = fields.track_title;
    var oldpath = files.track_selected.path;
    var newpath = __dirname + '/../public/track/' + nameFile;
    fs.copyFile(oldpath, newpath, function (err) {
      if (err) throw err;
    });
    fs.unlink( oldpath, function (err) {
      if (err) throw err;
    });

    let image = await ImageModel.findOne({_id : fields.track_artwork});

    track = new TrackModel({
      title: fields.track_title,
      date: getDate(),
      artwork: image ? image.url : null,
      artist: fields.track_artist,
      album: fields.track_album ? fields.track_album : null,
      genre: fields.track_genre,
      url: nameFile,
      like: 0,
    });
    await track.save();
    res.render('upload', {
      title: 'Doc Music'
    });
  });
});

router.post('/mod', async function(req, res, next) {

  let track = req.body.track_to_change ? await TrackModel.findOne({_id : req.body.track_to_change}) : null;

  if (track) {

    let image = await ImageModel.findOne({_id : req.body.track_artwork_to_change});


    track.title = req.body.track_title_to_change;
    track.artwork = image ? image.url : null;
    track.artist = req.body.track_artist_to_change;
    track.album = req.body.track_album_to_change ? req.body.track_album_to_change : null;
    track.genre = req.body.track_genre_to_change;
    await track.save();
  }

  res.render('upload', {
    title: 'Doc Music'
  });
 
});

router.post('/delete', async function(req, res, next) {

  let track = req.body.track_to_delete ? await TrackModel.findOne({_id : req.body.track_to_delete}) : null;

  if (track) {


    let playlists = await PlaylistModel.find({});


    playlists.forEach((playlist) => {
      playlist.trackListId.filter((id) => {
        return id != req.body.track_to_delete;
      });
      playlist.save();

    })

    const pathTrack = __dirname + '/../public/track/' + track.url;

    await track.remove();

    fs.unlink(pathTrack, function (err) {
      console.log("try to delete "+ pathTrack + "error :",err)
    }); 
  }

  res.render('upload', {
    title: 'Doc Music'
  });
 
});

router.post('/add_favorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let track = await TrackModel.findOne({_id : req.body.trackId});

  if (user) {
    await user.updateOne({trackFavorite : [req.body.trackId, ...user.trackFavorite]});
    await track.updateOne({like: track.like + 1})
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/add_unfavorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let track = await TrackModel.findOne({_id : req.body.trackId});


  if (user) {
    await user.updateOne({trackUnfavorite : [req.body.trackId, ...user.trackUnfavorite]});
    await track.updateOne({like: track.like - 1})
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/rem_favorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let track = await TrackModel.findOne({_id : req.body.trackId});


  if (user) {
    let arrayFavorite = user.trackFavorite;

    arrayFavorite = arrayFavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({trackFavorite : arrayFavorite});
    await track.updateOne({like: track.like - 1})
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.post('/rem_unfavorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});
  let track = await TrackModel.findOne({_id : req.body.trackId});


  if (user) {
    let arrayUnfavorite = user.trackUnfavorite;

    arrayUnfavorite = arrayUnfavorite.filter(
      function(data) {
        return data != req.body.trackId;
      }
    );
    await user.updateOne({trackUnfavorite : arrayUnfavorite});
    await track.updateOne({like: track.like + 1})
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/unfavorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    return  res.status(200).send({trackUnfavorite : user.trackUnfavorite});
  }
  return res.status(400).send({status : "user not found"});
});

router.get('/favorite', async function(req, res, next) {

  let user = await UserModel.findOne({access_token : req.headers.access_token});

  if (user) {
    return  res.status(200).send({trackFavorite : user.trackFavorite});
  }
  return res.status(400).send({status : "user not found"});
});

module.exports = router;
