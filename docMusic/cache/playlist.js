import Store from '../Store/configureStore'

function playlistFilter(playlistList, id) {
    return playlistList.filter(
        function(data) {
            return data == id
        }
    )
}

function isSavePlaylist(idPlaylist) {
    let store = Store.getState();
    let playlistId = store.playlist.playlistId;
    let result = playlistFilter(playlistId, idPlaylist);

    if (result.length == 0) {
        return false;
    } else {
        return true;
    }
}

exports.isSavePlaylist =isSavePlaylist;

function saveNewPlaylist(newPlaylist) {

    if (!isSavePlaylist(newPlaylist.id)) {
        const action = {type: 'ADD_PLAYLIST', playlist: newPlaylist};
        Store.dispatch(action);
    }
}

exports.saveNewPlaylist = saveNewPlaylist;

function getPlaylistCacheById(idPlaylist) {
    const store = Store.getState();

    if (isSavePlaylist(idPlaylist)) {
        const playlistCache = store.playlist.playlistCache;
        const result = playlistCache.filter(function(data) {
            return data.id == idPlaylist;
        })
        return result[0];
    } else {
        return null;
    }
}

exports.getPlaylistCacheById =getPlaylistCacheById;
