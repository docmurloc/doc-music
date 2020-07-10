import TrackPlayer from 'react-native-track-player';

import {GetTrackById} from '../APIserver/Track'

async function remplaceTrack(listIdTrack, id = null) {
    console.log("remplaceTrack", listIdTrack.length)

    await TrackPlayer.setupPlayer();
    await TrackPlayer.reset();

    let answer = null;

    for (let i = 0 ; i < listIdTrack.length; i++) {
        answer = await GetTrackById(listIdTrack[i]);

        await TrackPlayer.add(answer);
    }

    let queue = await TrackPlayer.getQueue();

    console.log("current queue ", queue);

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    console.log("remplaceTrack end")

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
    console.log("randomTrack", listIdTrack.length)

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

    let queue = await TrackPlayer.getQueue();

    console.log("current queue ", queue);

    if (id) {
        await TrackPlayer.skip(id);
    }

    await TrackPlayer.play();

    console.log("randomTrack end")

}

exports.randomTrack = randomTrack;
