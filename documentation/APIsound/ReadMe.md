# RESTAPIDocs sound

These function are used to manupilate the application sound using react-native-track-player

## Player management

### PAUSE()

This function pause the player and informe the app

```javascript
async function pause() {
    await TrackPlayer.pause();

    const action = {type: 'SET_PLAY', status: false};
    Store.dispatch(action);
}
```

### STOP()

This function pause the player and empty the current track in the app

```javascript
async function stop() {
    await TrackPlayer.pause();
    
    const action = {type: 'SET_CURRENT_TRACK', track: null};
    Store.dispatch(action);
}
```


### PLAY()

This function play the player

```javascript
async function play() {
    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}
```

## Playlist management


### PLAYATID(id)

This function play a track at the id save in the playlist 

```javascript
async function playAtId(id) {
    await TrackPlayer.skip(id);
    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}
```

### next()

This function skip the track play in the playlist to the next 

```javascript
async function next() {

    let queue = await TrackPlayer.getQueue();
    let store = Store.getState();
    let track = store.track.currentTrack.id;

    if (queue[queue.length - 1].id != track) {
        await TrackPlayer.skipToNext();
    } else {
        if (store.player.loop) {
            await TrackPlayer.skip(queue[0].id);
        }
    }
}
```

### previous()

This function skip the track play in the playlist to the previous one 

```javascript
async function previous() {

    let queue = await TrackPlayer.getQueue();
    let store = Store.getState();
    let track = store.track.currentTrack.id;

    if (queue[0].id != track) {
        await TrackPlayer.skipToPrevious();
    } else {
        if (store.player.loop) {
            await TrackPlayer.skip(queue[queue.length - 1].id);
        }
    }
}
```

### remplaceTrack(listIdTrack, id = null)

This function set the playlist to read by giving an array of track id. You can optionnaly start the playlist to a track by giving the track id as second argument

```javascript
async function remplaceTrack(listIdTrack, id = null) {

    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();

    let answer = null;

    for (let i = 0 ; i < listIdTrack.length; i++) {
        answer = await GetTrackById(listIdTrack[i]);

        await TrackPlayer.add(answer);
    }

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}
```

### remplaceTrack(listIdTrack, id = null)

This function set the playlist to be read by giving an array of track id. The playlist will be shuffle before starting .You can optionnaly start the playlist to a track by giving the track id as second argument

```javascript
async function randomTrack(listIdTrack, id = null) {

    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();

    let answer = null;
    let arrayAnswer = [];

    for (let i = 0 ; i < listIdTrack.length; i++) {
        answer = await GetTrackById(listIdTrack[i]);

        arrayAnswer = [...arrayAnswer, answer]
    }

    arrayAnswer = shuffle(arrayAnswer);

    await TrackPlayer.add(arrayAnswer);

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}
```
