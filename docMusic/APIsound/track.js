import TrackPlayer from 'react-native-track-player';

import {GetTrackById} from '../APIserver/Track'

async function remplaceTrack(listIdTrack) {
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

    await TrackPlayer.play();

    console.log("remplaceTrack end")

}

exports.remplaceTrack = remplaceTrack;