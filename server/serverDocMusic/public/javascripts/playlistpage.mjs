import {loadImageOption, loadTrackOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#playlistArtwork");
    await loadTrackOption("#playlistTrackList");

    $('#playlistTrackList').select2();
    console.log( "ready!" );
});