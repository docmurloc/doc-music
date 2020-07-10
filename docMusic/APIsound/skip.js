import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore'


async function next() {
    //let track = await TrackPlayer.getTrack(data.nextTrack);

    let queue = await TrackPlayer.getQueue();
    //console.log("queue:", queue);

    let store = Store.getState();

    let track = store.track.currentTrack.id;
    //console.log("track:", track);

    if (queue[queue.length - 1].id != track) {
        await TrackPlayer.skipToNext();
    } else {
        if (store.player.loop) {
            await TrackPlayer.skip(queue[0].id);
        }
        console.log("end queue:");

    }


}

exports.next = next;

async function previous() {

    let queue = await TrackPlayer.getQueue();
    console.log("queue:", queue);

    let store = Store.getState();

    let track = store.track.currentTrack.id;
    console.log("track:", track);

    if (queue[0].id != track) {
        await TrackPlayer.skipToPrevious();
    } else {
        if (store.player.loop) {
            await TrackPlayer.skip(queue[queue.length - 1].id);
        }
        console.log("queue first:");

    }
}

exports.previous = previous;