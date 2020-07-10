import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore'


async function next() {
    //let track = await TrackPlayer.getTrack(data.nextTrack);

    let queue = await TrackPlayer.getQueue();
    console.log("queue:", queue);

    let track = Store.getState().track.currentTrack.id;
    console.log("track:", track);

    if (queue[queue.length - 1].id != track) {
        await TrackPlayer.skipToNext();
    } else {
        console.log("end queue:");

    }


}

exports.next = next;

async function previous() {
    await TrackPlayer.skipToPrevious();
}

exports.previous = previous;