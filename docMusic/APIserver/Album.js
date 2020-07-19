import {saveNewAlbum} from '../cache/album';
import {IP_SERVER, PORT_SERVER} from '../env';


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