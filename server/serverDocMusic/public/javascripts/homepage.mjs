import {loadImageCard} from './image.mjs'
import {loadTrackCard} from './track.mjs'


$( document ).ready(function() {
    loadImageCard("#ImageDisplayer");
    loadTrackCard("#TrackDisplayer");
    console.log( "ready!" );
});