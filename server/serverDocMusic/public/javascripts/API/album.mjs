
export async function GetAllAlbum() {

    let answer = await fetch('/albums/all', {
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