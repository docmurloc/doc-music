var express = require('express');
const formidable = require('formidable');
var router = express.Router();

var fs = require('fs');

const {
  ImageModel
} = require("../models/image")

/* GET users listing. */
router.get('/random', async function(req, res, next) {

  let image = await ImageModel.findOne({_id : "5f04ab8ca54d336e12e41c20"});

    const answer = {
        id : image._id,
        url: image.url,
    };
    //await Test.save();
  console.log("get random image");
  res.status(200).send(answer);
});

router.get('/id', async function(req, res, next) {

    let image = await ImageModel.findOne({_id : req.headers.id});
  
      const answer = {
          id : image._id,
          url: image.url,
      };
    console.log("get image:", answer);
    res.status(200).send(answer);
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

    form.parse(req, (err, fields, files) => {
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
      //res.render('upload', {
      //  title: 'Doc Music'
      //});
      res.json({ fields, files });
    });
 
  //}
  //return res.status(400).send({status : "image already exist"});
});

module.exports = router;