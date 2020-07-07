var express = require('express');
var router = express.Router();

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

  //console.log("register user: ", req);

  let image = await ImageModel.findOne({
      url: req.body.url,
    });

  if (!image) {
    image = new ImageModel({
        url: req.body.url,
    });
    await image.save();
    return  res.status(200).send({status : "succes"});
  }
  return res.status(400).send({status : "image already exist"});
});

module.exports = router;