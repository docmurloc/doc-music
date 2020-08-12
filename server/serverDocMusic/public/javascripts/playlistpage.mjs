import {loadImageOption, loadTrackOption, loadAlbumOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#playlistArtwork");
    await loadTrackOption("#playlistTrackList");
    await loadAlbumOption("#playlistAlbum");

    $('#playlistTrackList').select2();
    console.log( "ready!" );
});