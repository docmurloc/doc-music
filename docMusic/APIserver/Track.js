
import {saveNewTrack, getTrackCacheById} from '../cache/track'

async function GetRandomTrack() {

    let answer = await fetch('http://89.87.94.17:3000/tracks/random', {
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

    answer = await fetch('http://89.87.94.17:3000/tracks/id', {
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