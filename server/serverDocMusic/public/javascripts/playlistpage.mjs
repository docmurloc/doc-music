import {loadImageOption, loadTrackOption, loadAlbumOption, loadPlaylistOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#playlistArtwork");
    await loadTrackOption("#playlistTrackList");
    await loadAlbumOption("#playlistAlbum");

    await loadPlaylistOption("#playlistToChange");
    await loadImageOption("#playlistArtworkToChange");
    await loadTrackOption("#playlistTrackListToChange");
    await loadAlbumOption("#playlistAlbumToChange");

    await loadPlaylistOption("#playlistToDelete");

    $('#playlistTrackList').select2();
    $('#playlistTrackListToChange').select2();
    console.log( "ready!" );
});