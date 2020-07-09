async function GetRandomPlaylist() {

    let answer = await fetch('http://89.87.94.17:3000/playlists/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    return answer;
}

exports.GetRandomPlaylist = GetRandomPlaylist;

async function GetPlaylistById(id) {

    let answer = await fetch('http://89.87.94.17:3000/playlists/id', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'id' : id
        },
        method: 'GET',
    })

    answer = await answer.json();

    return answer;
}

exports.GetPlaylistById = GetPlaylistById;