import {GetAllTrack} from './API/track.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardTrack(data) {
    //console.log(data);
    const result = '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="'+ data.artwork + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.title +'</h5>'
          '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>' +
          '<a href="#" class="btn btn-primary">Go somewhere</a>' +
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
