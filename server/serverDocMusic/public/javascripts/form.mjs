import {GetAllImages} from './API/image.mjs';
import {GetAllTrack} from './API/track.mjs';

//const {GetAllImages} = require('./API/image.js');

function createImageOptionForm(data) {
    const result = '<option value="'+ data._id +'">'+ data.name +'</option>'
    //console.log(result);


    return result;
}

export async function loadImageOption(element) {
    const dataImageArray = await GetAllImages();
    let i = 0;

    for (i = 0; i < dataImageArray.length; i++) {
        $(element).append(createImageOptionForm(dataImageArray[i]));
    }
}

function createTrackOptionForm(data) {
    const result = '<option value="'+ data._id +'">'+ data.title +'</option>'
    //console.log(result);


    return result;
}

export async function loadTrackOption(element) {
    const dataImageArray = await GetAllTrack();
    let i = 0;

    for (i = 0; i < dataImageArray.length; i++) {
        $(element).append(createTrackOptionForm(dataImageArray[i]));
    }
}