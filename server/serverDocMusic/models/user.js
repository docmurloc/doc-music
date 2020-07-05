//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  pseudo: String,
  password: String,
  access_token: String,
});

// Compile model from schema
var UserModel = mongoose.model('User', UserModelSchema );

exports.UserModel = UserModel;