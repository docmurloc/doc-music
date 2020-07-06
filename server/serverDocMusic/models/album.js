//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var AlbumModelSchema = new Schema({
    title: String,
    artist: String,
    artwork: String,
    date: String,
    genre: String,
    trackListId: [String],
});

// Compile model from schema
var AlbumModel = mongoose.model('Album', AlbumModelSchema );

exports.AlbumModel = AlbumModel;