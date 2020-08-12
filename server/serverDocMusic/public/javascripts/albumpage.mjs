import {loadImageOption, loadPlaylistOption, loadAlbumOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#albumArtwork");
    await loadPlaylistOption("#albumPlaylist");
    await loadAlbumOption("#albumToLink");
    await loadPlaylistOption("#PlaylistToLink");

    console.log( "ready!" );
});