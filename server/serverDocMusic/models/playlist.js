//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var PlaylistModelSchema = new Schema({
    title: String,
    date: String,
    artwork: String,
    trackListId: [String],
});

// Compile model from schema
var PlaylistModel = mongoose.model('Playlist', PlaylistModelSchema );

exports.PlaylistModel = PlaylistModel;