import {loadImageOption, loadAlbumOption, loadTrackOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#trackArtwork");
    await loadImageOption("#pictureToChange");
    await loadImageOption("#pictureToDelete");
    await loadAlbumOption("#trackAlbum");
    await loadTrackOption("#trackToChange");
    await loadAlbumOption("#trackAlbumToChange");
    await loadImageOption("#trackArtworkToChange");
    await loadTrackOption("#trackToDelete");
});