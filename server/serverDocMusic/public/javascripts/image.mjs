import {GetAllImages} from './API/image.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardImage(data) {
    const result = '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="'+ data.url + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.name +'</h5>' +
        '</div>' +
    '</div>';

    return result;
}

export async function loadImageCard(element) {
    const dataCardArray = await GetAllImages();
    let i = 0;

    for (i = 0; i < dataCardArray.length; i++) {
        $(element).append(createCardImage(dataCardArray[i]));
    }
}

//module.exports.loadImageCard = loadImageCard;
