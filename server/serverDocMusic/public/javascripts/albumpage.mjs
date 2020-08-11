import {loadImageOption, loadPlaylistOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#albumArtwork");
    await loadPlaylistOption("#albumPlaylist");

    console.log( "ready!" );
});