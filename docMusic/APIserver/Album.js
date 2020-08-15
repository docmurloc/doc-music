import {saveNewAlbum, getAlbumCacheById} from '../cache/album';
import {IP_SERVER, PORT_SERVER} from '../env';

import Store from '../Store/configureStore'


async function GetRandomAlbum() {

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    saveNewAlbum(answer);

    return answer;
}

exports.GetRandomAlbum = GetRandomAlbum;

async function GetRandomListAlbum(lengthList) {

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/randomList', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'nbrand' : lengthList
        },
        method: 'GET',
    })

    answer = await answer.json();


    return answer;
}

exports.GetRandomListAlbum = GetRandomListAlbum;

async function GetAlbumById(id) {


    let answer = getAlbumCacheById(id);

    if (answer) {
        return answer;
    }

    answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/id', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'id' : id
        },
        method: 'GET',
    })

    answer = await answer.json();

    saveNewAlbum(answer);

    return answer;
}

exports.GetAlbumById = GetAlbumById;

async function AlbumFavorite(userToken) {

    fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/favorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        const action = {type: 'SET_ALBUM_FAVORITE', albumFavorite: answer.albumFavorite};
        Store.dispatch(action);
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.AlbumFavorite = AlbumFavorite;

async function addAlbumFavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/add_favorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "succes") {
            const action = {type: 'ADD_ALBUM_FAVORITE', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.addAlbumFavorite = addAlbumFavorite;


async function removeAlbumFavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/albums/rem_favorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "succes") {
            const action = {type: 'REM_ALBUM_FAVORITE', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.removeAlbumFavorite = removeAlbumFavorite;