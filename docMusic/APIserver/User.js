import Store from '../Store/configureStore'


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
    .then(async (answer) => {
        if (answer.access_token) {
            const action = {type: 'CONNECTION', accessToken: answer.access_token}
            props.dispatch(action)

            await UserHistoric(answer.access_token);
            await UserFavorite(answer.access_token);
            await UserUnfavorite(answer.access_token);

            props.navigation.navigate('HomeTab');
        } else {
            setInfo(answer.status);
        }
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.loginUser = loginUser;

async function UserHistoric(userToken) {

    console.log("get user historic");

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
        const action = {type: 'SET_HISTORIC', trackHistoric: answer.trackHistoric};
        Store.dispatch(action);
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.UserHistoric = UserHistoric;


async function UserFavorite(userToken) {
    console.log("get user favorite");

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
        const action = {type: 'SET_FAVORITE', trackFavorite: answer.trackFavorite};
        Store.dispatch(action);
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.UserFavorite = UserFavorite;

async function UserUnfavorite(userToken) {

    console.log("get user Unfavorite");

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
        const action = {type: 'SET_UNFAVORITE', trackUnfavorite: answer.trackUnfavorite};
        Store.dispatch(action);
        return answer;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.UserUnfavorite = UserUnfavorite;

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
            const action = {type: 'ADD_HISTORIC', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.addUserHistoric = addUserHistoric;


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
            console.log("add user Favorite");
            const action = {type: 'ADD_FAVORITE', trackId: id};
            Store.dispatch(action);
            console.log("add user Favorite END");
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.addUserFavorite = addUserFavorite;


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
            const action = {type: 'ADD_UNFAVORITE', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.addUserUnfavorite = addUserUnfavorite;

async function removeUserFavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://89.87.94.17:3000/users/rem_favorite', {
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
            const action = {type: 'REM_FAVORITE', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.removeUserFavorite = removeUserFavorite;


async function removeUserUnfavorite(userToken, id) {

    const bodyRequest =JSON.stringify ({
        trackId : id,
    });

    fetch('http://89.87.94.17:3000/users/rem_unfavorite', {
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
            const action = {type: 'REM_UNFAVORITE', trackId: id};
            Store.dispatch(action);
            return true;
        }
        return false;
    })
    .catch((error) => {
        console.error("error :",error);
    });
}

exports.removeUserUnfavorite = removeUserUnfavorite;
