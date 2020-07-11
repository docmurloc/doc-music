import TrackPlayer from 'react-native-track-player';

import Store from '../Store/configureStore'


async function play() {
    await TrackPlayer.play();

    //console.log("Play event");

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}

exports.play = play;

async function playAtId(id) {
    await TrackPlayer.skip(id);
    await TrackPlayer.play();

    //console.log("Play event");

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}

exports.playAtId = playAtId;
