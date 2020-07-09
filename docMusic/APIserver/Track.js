async function GetRandomTrack() {

    let answer = await fetch('http://89.87.94.17:3000/tracks/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    return answer;
}

exports.GetRandomTrack = GetRandomTrack;

async function GetTrackById(id) {

    console.log("GetTrackById", id)

    let answer = await fetch('http://89.87.94.17:3000/tracks/id', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'id' : id
        },
        method: 'GET',
    })

    answer = await answer.json();

    console.log("GetTrackById result", answer);


    return answer;
}

exports.GetTrackById = GetTrackById;