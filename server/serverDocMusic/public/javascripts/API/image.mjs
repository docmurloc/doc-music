

export async function GetAllImages() {

    let answer = await fetch('/images/all', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    answer = await answer.json();

    return answer;
}
