import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore'

import {GetTrackById} from '../APIserver/Track'

async function remplaceTrack(listIdTrack, id = null) {

    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();

    let answer = null;

    for (let i = 0 ; i < listIdTrack.length; i++) {
        answer = await GetTrackById(listIdTrack[i]);

        await TrackPlayer.add(answer);
    }

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}

exports.remplaceTrack = remplaceTrack;

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

async function randomTrack(listIdTrack, id = null) {

    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();

    let answer = null;
    let arrayAnswer = [];

    for (let i = 0 ; i < listIdTrack.length; i++) {
        answer = await GetTrackById(listIdTrack[i]);

        arrayAnswer = [...arrayAnswer, answer]
    }

    arrayAnswer = shuffle(arrayAnswer);

    await TrackPlayer.add(arrayAnswer);

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    const action = {type: 'SET_PLAY', status: true};
    Store.dispatch(action);
}

exports.randomTrack = randomTrack;
