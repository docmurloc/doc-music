import {GetAllPlaylist} from './API/playlist.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardPlaylist(data) {
    //console.log(data);
    const result = '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="'+ data.artwork  + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.title  + ' from ' + data.author +'</h5>' +
        '</div>' +
    '</div>';

    return result;
}

export async function loadPlaylistCard(element) {
    const dataCardArray = await GetAllPlaylist();
    let i = 0;

    for (i = 0; i < dataCardArray.length; i++) {
        $(element).append(createCardPlaylist(dataCardArray[i]));
    }
}