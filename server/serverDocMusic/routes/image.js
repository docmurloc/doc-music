var express = require('express');
const formidable = require('formidable');
var router = express.Router();

const {IP_SERVER, PORT_SERVER} = require('../env');

const baseURLImage = 'http://' + IP_SERVER + ':' + PORT_SERVER + '/image/';


var fs = require('fs');

const {
  AlbumModel
} = require("../models/album")

const {
  PlaylistModel
} = require("../models/playlist")

const {
  TrackModel
} = require("../models/track")

const {
  ImageModel
} = require("../models/image")

/* GET users listing. */
router.get('/random', async function(req, res, next) {

  let image = await ImageModel.findOne({_id : "5f04ab8ca54d336e12e41c20"});

    const answer = {
        id : image._id,
        url: baseURLImage + image.url,
    };
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let image = await ImageModel.findOne({_id : req.headers.id});
  
      const answer = {
          id : image._id,
          url: baseURLImage+ image.url,
      };
    res.status(200).send(answer);
});

router.get('/all', async function(req, res, next) {
  let images = await ImageModel.find({});

  images.forEach((image) => {
    image.url = baseURLImage + image.url;
  })

  res.status(200).send(images);
});

router.post('/upload', async function(req, res, next) {

    const form = formidable({ multiples: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        next(err);
        return;
      }
      var nameFile = fields.picture_name;
      var oldpath = files.picture_selected.path;
      var newpath = __dirname + '/../public/image/' + nameFile;
      fs.copyFile(oldpath, newpath, function (err) {
        if (err) throw err;
      });
      fs.unlink( oldpath, function (err) {
        if (err) throw err;
      }); 

      let image = new ImageModel({
              url: nameFile,
              name: fields.picture_name
          });
        
      await image.save();


      res.render('upload', {
        title: 'Doc Music'
      });
    }); 
});


router.post('/mod', async function(req, res, next) {

  let image = req.body.picture_to_change ? await ImageModel.findOne({_id : req.body.picture_to_change}) : null;

  if (image) {
    image.name = req.body.picture_rename;
    await image.save();
  }

  res.render('upload', {
    title: 'Doc Music'
  });
 
});

router.post('/delete', async function(req, res, next) {

  let image = req.body.picture_to_delete ? await ImageModel.findOne({_id : req.body.picture_to_delete}) : null;

  if (image) {


    let albums = await AlbumModel.find({artwork: image.url});
    let playlists = await PlaylistModel.find({artwork: image.url});
    let tracks = await TrackModel.find({artwork: image.url});

    albums.forEach((album) => {
      album.artwork = null;
      album.save();

    })

    playlists.forEach((playlist) => {
      playlist.artwork = null;
      playlist.save();

    })

    tracks.forEach((track) => {
      track.artwork = null;
      track.save();

    })

    const pathImage = __dirname + '/../public/image/' + image.url;

    await image.remove();

    fs.unlink(pathImage, function (err) {
      console.log("try to delete "+ pathImage + "error :",err)
    }); 
  }

  res.render('upload', {
    title: 'Doc Music'
  });
 
});

module.exports = router;