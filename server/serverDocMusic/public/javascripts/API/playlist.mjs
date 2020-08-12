
export async function GetAllPlaylist() {

    let answer = await fetch('/playlists/all', {
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