import Store from '../Store/configureStore'

function albumFilter(albumList, id) {
    return albumList.filter(
        function(data) {
            return data == id
        }
    )
}

function isSaveAlbum(idAlbum) {
    let store = Store.getState();

    let arrayAlbumId = store.album.albumIdList;
    let result = albumFilter(arrayAlbumId, idAlbum);

    if (result.length == 0) {
        return false;
    } else {
        return true;
    }
}

exports.isSaveAlbum = isSaveAlbum;

function saveNewAlbum(newAlbum) {

    if (!isSaveAlbum(newAlbum.id)) {
        const action = {type: 'ADD_ALBUM', album: newAlbum};
        Store.dispatch(action);
    }
}

exports.saveNewAlbum = saveNewAlbum;

function getAlbumCacheById(idAlbum) {
    const store = Store.getState();

    if (isSaveAlbum(idAlbum)) {
        const albumList = store.album.albumList;
        const result = albumList.filter(function(data) {
            return data.id == idAlbum;
        })
        return result[0];
    } else {
        return null;
    }
}

exports.getAlbumCacheById = getAlbumCacheById;