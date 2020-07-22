import {saveNewAlbum} from '../cache/album';
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

async function AlbumFavorite(userToken) {
    //console.log("get album favorite ", userToken);

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
        console.log("answer album favorite", answer);
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
            console.log("add user Favorite album");
            const action = {type: 'ADD_ALBUM_FAVORITE', trackId: id};
            Store.dispatch(action);
            console.log("add user Favorite END");
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

