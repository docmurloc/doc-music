import {saveNewTrack, getTrackCacheById} from '../cache/track';
import {IP_SERVER, PORT_SERVER} from '../env';

import Store from '../Store/configureStore';

async function GetRandomTrack() {
  let answer = await fetch(
    'http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/random',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    },
  );

  answer = await answer.json();

  saveNewTrack(answer);

  return answer;
}

exports.GetRandomTrack = GetRandomTrack;

async function GetTrackById(id) {
  let answer = getTrackCacheById(id);

  if (answer) {
    return answer;
  }

  answer = await fetch(
    'http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/id',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        id: id,
      },
      method: 'GET',
    },
  );

  answer = await answer.json();

  saveNewTrack(answer);

  return answer;
}

exports.GetTrackById = GetTrackById;

async function GetTrackByTitle(title) {
  let answer = await fetch(
    'http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/research',
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        title: title,
      },
      method: 'GET',
    },
  );

  answer = await answer.json();

  return answer;
}

exports.GetTrackByTitle = GetTrackByTitle;

async function TrackFavorite(userToken) {
  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/favorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((answer) => {
      const action = {
        type: 'SET_FAVORITE',
        trackFavorite: answer.trackFavorite,
      };
      Store.dispatch(action);
      return answer;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.TrackFavorite = TrackFavorite;

async function TrackUnfavorite(userToken) {
  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/unfavorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((answer) => {
      const action = {
        type: 'SET_UNFAVORITE',
        trackUnfavorite: answer.trackUnfavorite,
      };
      Store.dispatch(action);
      return answer;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.TrackUnfavorite = TrackUnfavorite;

async function addTrackFavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/add_favorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 'succes') {
        const action = {type: 'ADD_FAVORITE', trackId: id};
        Store.dispatch(action);
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.addTrackFavorite = addTrackFavorite;

async function addTrackUnfavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/add_unfavorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 'succes') {
        const action = {type: 'ADD_UNFAVORITE', trackId: id};
        Store.dispatch(action);
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.addTrackUnfavorite = addTrackUnfavorite;

async function removeTrackFavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/rem_favorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 'succes') {
        const action = {type: 'REM_FAVORITE', trackId: id};
        Store.dispatch(action);
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.removeTrackFavorite = removeTrackFavorite;

async function removeTrackUnfavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/rem_unfavorite', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      access_token: userToken,
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.status === 'succes') {
        const action = {type: 'REM_UNFAVORITE', trackId: id};
        Store.dispatch(action);
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.removeTrackUnfavorite = removeTrackUnfavorite;
