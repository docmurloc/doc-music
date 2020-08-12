import {loadImageOption, loadAlbumOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#trackArtwork");
    await loadAlbumOption("#trackAlbum");
    console.log( "ready!" );
});