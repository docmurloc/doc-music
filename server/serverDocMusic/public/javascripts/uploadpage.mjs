import {loadImageOption, loadAlbumOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#trackArtwork");
    await loadImageOption("#pictureToChange");
    await loadImageOption("#pictureToDelete");
    await loadAlbumOption("#trackAlbum");
    console.log( "ready!" );
});