# cache management

The track, playlist and album information will be save in a redux after every request if it has not been already save. These information will be erase only by closing the app.
This reduce the number of api request between each page to show information.

Only the user information will be erase by logout the user. The user will not have to do the login process each time he close the app.

## Save in cache

### album

```javascript
function saveNewAlbum(newAlbum) {

    if (!isSaveAlbum(newAlbum.id)) {
        const action = {type: 'ADD_ALBUM', album: newAlbum};
        Store.dispatch(action);
    }
}
```

### playlist

```javascript
function saveNewPlaylist(newPlaylist) {

    if (!isSavePlaylist(newPlaylist.id)) {
        const action = {type: 'ADD_PLAYLIST', playlist: newPlaylist};
        Store.dispatch(action);
    }
}
```

### track

```javascript
function saveNewTrack(newTrack) {

    if (!isSaveTrack(newTrack.id)) {
        const action = {type: 'ADD_TRACK', track: newTrack};
        Store.dispatch(action);
    }
}
```

## check and get in cache

### album

```javascript
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
```

### playlist

```javascript
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
```

### track

```javascript
function getTrackCacheById(idTrack) {
    const store = Store.getState();

    if (isSaveTrack(idTrack)) {
        const arrayTrack = store.track.trackCache;
        const result = arrayTrack.filter(function(data) {
            return data.id == idTrack;
        })
        return result[0];
    } else {
        return null;
    }
}
```