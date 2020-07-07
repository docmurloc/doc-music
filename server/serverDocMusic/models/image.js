//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var ImageModelSchema = new Schema({
    url: String,
});

// Compile model from schema
var ImageModel = mongoose.model('Image', ImageModelSchema );

exports.ImageModel = ImageModel;