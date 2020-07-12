

async function loginUser(props, newPseudo, newPassword, setInfo) {

    fetch('http://89.87.94.17:3000/users/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'pseudo' : newPseudo,
            'password': newPassword

        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        //if (answer.access_token) {
            //const action = {type: 'CONNECTION', accessToken: answer.access_token}
            //props.dispatch(action)

            props.navigation.navigate('HomeTab');
        //} else {
        //    setInfo(answer.status);
        //}
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;

async function UserHistoric(userToken) {

    fetch('http://89.87.94.17:3000/users/historic', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,

        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;


async function UserFavorite(userToken) {

    fetch('http://89.87.94.17:3000/users/favorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;

async function UserUnfavorite(userToken) {

    fetch('http://89.87.94.17:3000/users/unfavorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;

async function addUserHistoric(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://89.87.94.17:3000/users/add_historic', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "succes") {
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;


async function addUserFavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://89.87.94.17:3000/users/add_favorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "succes") {
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;


async function addUserUnfavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://89.87.94.17:3000/users/add_unfavorite', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'access_token' : userToken,
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data.status == "succes") {
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;
