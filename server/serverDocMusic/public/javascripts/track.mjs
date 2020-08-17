import {GetAllTrack} from './API/track.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardTrack(data) {
    const result = '<div class="card" style="width: 22rem;">' +
    '<img class="card-img-top" src="'+ data.artwork + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.title + ' - ' + data.genre +'</h5>' +
            '<audio controls>' +
            '<source src="' + data.url +'" type="audio/mpeg">' +
            'Your browser does not support the audio element.' +
            '</audio>' +
        '</div>' +
    '</div>';

    return result;
}

export async function loadTrackCard(element) {
    const dataCardArray = await GetAllTrack();
    let i = 0;

    for (i = 0; i < dataCardArray.length; i++) {
        $(element).append(createCardTrack(dataCardArray[i]));
    }
}

//module.exports.loadImageCard = loadImageCard;
