
import {saveNewTrack, getTrackCacheById} from '../cache/track'
import {IP_SERVER, PORT_SERVER} from '../env';


async function GetRandomTrack() {

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    saveNewTrack(answer);

    return answer;
}

exports.GetRandomTrack = GetRandomTrack;

async function GetTrackById(id) {

    //console.log("GetTrackById", id)

    let answer = getTrackCacheById(id);

    if (answer) {
        //console.log("answer cache get track by id: ", answer);
        return answer;
    }

    answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/id', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'id' : id
        },
        method: 'GET',
    })

    answer = await answer.json();

    //console.log("GetTrackById result", answer);

    saveNewTrack(answer);


    return answer;
}

exports.GetTrackById = GetTrackById;


async function GetTrackByTitle(title) {

    console.log("GetTrackByTitle", title)

    let answer = await fetch('http://' + IP_SERVER + ':' + PORT_SERVER + '/tracks/research', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'title' : title
        },
        method: 'GET',
    })

    answer = await answer.json();

    console.log("GetTrackByTitle result", answer);

    return answer;
}

exports.GetTrackByTitle = GetTrackByTitle;