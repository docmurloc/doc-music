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

    console.log("idPlaylist ", idPlaylist, "playlist array ", playlistId);
    let result = playlistFilter(playlistId, idPlaylist);

    if (result.length == 0) {
        return false;
    } else {
        return true;
    }
}

exports.isSavePlaylist =isSavePlaylist;

function saveNewPlaylist(newPlaylist) {

    console.log("saveNewPlaylist ", newPlaylist.id, !isSavePlaylist(newPlaylist.id));

    if (!isSavePlaylist(newPlaylist.id)) {
        console.log("saveNewPlaylist not in cache");

        const action = {type: 'ADD_PLAYLIST', playlist: newPlaylist};
        Store.dispatch(action);
    }
}

exports.saveNewPlaylist = saveNewPlaylist;

function getPlaylistCacheById(idPlaylist) {
    const store = Store.getState();

    console.log("getPlaylistCacheById", idPlaylist, isSavePlaylist(idPlaylist));


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
