import Store from '../Store/configureStore';

function trackFilter(imageList, id) {
  return imageList.filter(function (data) {
    return data === id;
  });
}

function isSaveTrack(idTrack) {
  let store = Store.getState();
  let arrayTrackId = store.track.trackId;
  let result = trackFilter(arrayTrackId, idTrack);

  if (result.length === 0) {
    return false;
  } else {
    return true;
  }
}

exports.isSaveTrack = isSaveTrack;

function saveNewTrack(newTrack) {
  if (!isSaveTrack(newTrack.id)) {
    const action = {type: 'ADD_TRACK', track: newTrack};
    Store.dispatch(action);
  }
}

exports.saveNewTrack = saveNewTrack;

function getTrackCacheById(idTrack) {
  const store = Store.getState();

  if (isSaveTrack(idTrack)) {
    const arrayTrack = store.track.trackCache;
    const result = arrayTrack.filter(function (data) {
      return data.id === idTrack;
    });
    return result[0];
  } else {
    return null;
  }
}

exports.getTrackCacheById = getTrackCacheById;
