import {loadImageOption} from './form.mjs'


$( document ).ready( async function() {
    await loadImageOption("#trackArtwork");
    console.log( "ready!" );
});