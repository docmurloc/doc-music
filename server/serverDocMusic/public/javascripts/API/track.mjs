
export async function GetAllTrack() {

    let answer = await fetch('/tracks/all', {
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