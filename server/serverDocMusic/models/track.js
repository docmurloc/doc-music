//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TrackModelSchema = new Schema({
    title: String,
    artist: String,
    album: String,
    genre: String,
    date: String,
    url: String,
    artwork: String,
    like: Number,

});

// Compile model from schema
var TrackModel = mongoose.model('Track', TrackModelSchema );

exports.TrackModel = TrackModel;