import Store from '../Store/configureStore'

function trackFilter(imageList, id) {
    //console.log("filter track array, id:", imageList, id);
    return imageList.filter(
        function(data) {
            //console.log("filter track:", data, id);
            return data == id
        }
    )
}

function isSaveTrack(idTrack) {
    let store = Store.getState();

    let arrayTrackId = store.track.trackId;
    let result = trackFilter(arrayTrackId, idTrack);

    //console.log("is Save track result:", result, result.length == 0)
    if (result.length == 0) {
        //console.log("return false");
        return false;
    } else {
        //console.log("return true");
        return true;
    }
}

exports.isSaveTrack = isSaveTrack;

function saveNewTrack(newTrack) {

    //console.log("save new track:", newTrack.id);

    if (!isSaveTrack(newTrack.id)) {
        //console.log("save track");
        const action = {type: 'ADD_TRACK', track: newTrack};
        Store.dispatch(action);
        //console.log("track reducer send");
    }
}

exports.saveNewTrack = saveNewTrack;

function getTrackCacheById(idTrack) {
    const store = Store.getState();

    //console.log("cache track:", store.track);

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

exports.getTrackCacheById = getTrackCacheById;