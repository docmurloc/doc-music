import {loadImageCard} from './image.mjs'
import {loadTrackCard} from './track.mjs'
import {loadPlaylistCard} from './playlist.mjs'
import {loadAlbumCard} from './album.mjs'


$( document ).ready(function() {
    loadImageCard("#ImageDisplayer");
    loadTrackCard("#TrackDisplayer");
    loadPlaylistCard('#PlaylistDisplayer');
    loadAlbumCard('#AlbumDisplayer');
});