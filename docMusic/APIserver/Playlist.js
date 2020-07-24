import {saveNewPlaylist, getPlaylistCacheById} from '../cache/playlist'
import {IP_SERVER, PORT_SERVER} from '../env';


async function GetRandomPlaylist() {

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/playlists/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    saveNewPlaylist(answer);

    return answer;
}

exports.GetRandomPlaylist = GetRandomPlaylist;

async function GetPlaylistById(id) {

    let answer = getPlaylistCacheById(id);

    if (answer) {
        //console.log("answer cache playlist: ", answer);
        return answer;
    }

    answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/playlists/id', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'id' : id
        },
        method: 'GET',
    })

    answer = await answer.json();

    //console.log("answer not cached playlist: ", answer);


    saveNewPlaylist(answer);

    return answer;
}

exports.GetPlaylistById = GetPlaylistById;