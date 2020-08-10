import {GetAllImages} from './API/image.mjs';

//const {GetAllImages} = require('./API/image.js');

function createImageOptionForm(data) {
    const result = '<option value="'+ data._id +'">'+ data.name +'</option>'
    console.log(result);


    return result;
}

export async function loadImageOption(element) {
    const dataImageArray = await GetAllImages();
    let i = 0;

    for (i = 0; i < dataImageArray.length; i++) {
        $(element).append(createImageOptionForm(dataImageArray[i]));
    }
}