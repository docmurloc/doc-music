import {GetAllAlbum} from './API/album.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardAlbum(data) {
    console.log(data);
    const result = '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="'+ data.artwork + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.title + ' from ' + data.artist + ' - ' + data.genre  +'</h5>' +
        '</div>' +
    '</div>';

    return result;
}

export async function loadAlbumCard(element) {
    const dataCardArray = await GetAllAlbum();
    let i = 0;

    for (i = 0; i < dataCardArray.length; i++) {
        $(element).append(createCardAlbum(dataCardArray[i]));
    }
}