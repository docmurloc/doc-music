//import {IP_SERVER, PORT_SERVER} from '../../env.js';

const IP_SERVER =  '89.87.94.17';
const PORT_SERVER = '3000';



export async function GetAllPlaylist() {

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/playlists/all', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    //console.log(answer);
    return answer;
}