import {GetAllImages} from './API/image.mjs';

//const {GetAllImages} = require('./API/image.js');

function createCardImage(data) {
    //console.log(data);
    const result = '<div class="card" style="width: 18rem;">' +
    '<img class="card-img-top" src="'+ data.url + '" alt="Card image cap">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + data.name +'</h5>'
          '<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p>' +
          '<a href="#" class="btn btn-primary">Go somewhere</a>' +
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
