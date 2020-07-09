

async function GetRandomAlbum() {

    let answer = await fetch('http://89.87.94.17:3000/albums/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    return answer;
}

exports.GetRandomAlbum = GetRandomAlbum;