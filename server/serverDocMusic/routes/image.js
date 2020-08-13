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
    //await Test.save();
  console.log("get random image");
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let image = await ImageModel.findOne({_id : req.headers.id});
  
      const answer = {
          id : image._id,
          url: baseURLImage+ image.url,
      };
    console.log("get image:", answer);
    res.status(200).send(answer);
});

router.get('/all', async function(req, res, next) {
  let images = await ImageModel.find({});

  images.forEach((image) => {
    image.url = baseURLImage + image.url;
  })

  //console.log("get image all:", images);
  res.status(200).send(images);
});

router.post('/upload', async function(req, res, next) {

  console.log("image upload: ", req.body);

  //let image = await ImageModel.findOne({
  //    url: req.body.url,
  //  });
//
  //if (!image) {
  //  image = new ImageModel({
  //      url: req.body.url,
  //  });
  //  await image.save();
    //return  res.status(200).send({status : "succes"});
    //res.render('upload', {
    //  title: 'Doc Music'
    //});

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
      //res.json({ fields, files });
    });
 
  //}
  //return res.status(400).send({status : "image already exist"});
});


router.post('/mod', async function(req, res, next) {

  //console.log("image change: ", req.body);

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

  //console.log("image delete: ", req.body);

  let image = req.body.picture_to_delete ? await ImageModel.findOne({_id : req.body.picture_to_delete}) : null;

  //console.log("imgae found = ", image);


  if (image) {


    let albums = await AlbumModel.find({artwork: image.url});
    let playlists = await PlaylistModel.find({artwork: image.url});
    let tracks = await TrackModel.find({artwork: image.url});

    albums.forEach((album) => {
      album.artwork = null;
      album.save();

    })

    //console.log("save change in albums");

    playlists.forEach((playlist) => {
      playlist.artwork = null;
      playlist.save();

    })

    //console.log("save change in playlists");

    tracks.forEach((track) => {
      track.artwork = null;
      track.save();

    })

    //console.log("save change in tracks");

    const pathImage = __dirname + '/../public/image/' + image.url;

    //await ImageModel.deleteOne({_id : req.body.pictureToDelete});
    await image.remove();

    //console.log("delete image in database");


    fs.unlink(pathImage, function (err) {
      console.log("try to delete "+ pathImage + "error :",err)
    }); 
  }

  res.render('upload', {
    title: 'Doc Music'
  });
 
});

module.exports = router;