import Store from '../Store/configureStore';
import {IP_SERVER, PORT_SERVER} from '../env';
import {TrackFavorite, TrackUnfavorite} from './Track';
import {AlbumFavorite} from './Album';

async function loginUser(props, newPseudo, newPassword, setInfo) {
  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/login', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      pseudo: newPseudo,
      password: newPassword,
    },
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then(async (answer) => {
      if (answer.access_token) {
        await UserHistoric(answer.access_token);
        await TrackFavorite(answer.access_token);
        await AlbumFavorite(answer.access_token);
        await TrackUnfavorite(answer.access_token);

        const action = {type: 'CONNECTION', accessToken: answer.access_token};
        props.dispatch(action);
      } else {
        setInfo(answer.status);
      }
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.loginUser = loginUser;

async function registerUser(props, newPseudo, newPassword, setInfo) {
  const bodyRequest = JSON.stringify({
    pseudo: newPseudo,
    password: newPassword,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/register', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then(async (answer) => {
      setInfo(answer.status);
      if (answer.status === 'succes') {
        await UserHistoric(answer.access_token);
        await TrackFavorite(answer.access_token);
        await AlbumFavorite(answer.access_token);
        await TrackUnfavorite(answer.access_token);

        const action = {type: 'CONNECTION', accessToken: answer.access_token};
        props.dispatch(action);
      }
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.registerUser = registerUser;

async function UserHistoric(userToken) {
  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/historic', {
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
        type: 'SET_HISTORIC',
        trackHistoric: answer.trackHistoric,
      };
      Store.dispatch(action);
      return answer;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.UserHistoric = UserHistoric;

async function addUserHistoric(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/add_historic', {
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
        const action = {type: 'ADD_HISTORIC', trackId: id};
        Store.dispatch(action);
        return true;
      }
      return false;
    })
    .catch((error) => {
      console.error('error :', error);
    });
}

exports.addUserHistoric = addUserHistoric;

async function addUserFavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/add_favorite', {
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

exports.addUserFavorite = addUserFavorite;

async function addUserUnfavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/add_unfavorite', {
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

exports.addUserUnfavorite = addUserUnfavorite;

async function removeUserFavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/rem_favorite', {
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

exports.removeUserFavorite = removeUserFavorite;

async function removeUserUnfavorite(userToken, id) {
  const bodyRequest = JSON.stringify({
    trackId: id,
  });

  fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/users/rem_unfavorite', {
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

exports.removeUserUnfavorite = removeUserUnfavorite;
