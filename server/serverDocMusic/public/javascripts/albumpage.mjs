import {loadImageOption, loadPlaylistOption, loadAlbumOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#albumArtwork");
    await loadPlaylistOption("#albumPlaylist");

    await loadAlbumOption("#albumToLink");
    await loadPlaylistOption("#PlaylistToLink");

    await loadAlbumOption("#albumToChange");
    await loadImageOption("#albumArtworkToChange");
    await loadPlaylistOption("#albumPlaylistToChange");

    await loadAlbumOption("#albumToDelete");

});