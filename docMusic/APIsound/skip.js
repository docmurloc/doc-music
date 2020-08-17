import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore';

async function next() {
  let queue = await TrackPlayer.getQueue();
  let store = Store.getState();
  let track = store.track.currentTrack.id;

  if (queue[queue.length - 1].id !== track) {
    await TrackPlayer.skipToNext();
  } else {
    if (store.player.loop) {
      await TrackPlayer.skip(queue[0].id);
    }
  }
}

exports.next = next;

async function previous() {
  let queue = await TrackPlayer.getQueue();
  let store = Store.getState();
  let track = store.track.currentTrack.id;

  if (queue[0].id !== track) {
    await TrackPlayer.skipToPrevious();
  } else {
    if (store.player.loop) {
      await TrackPlayer.skip(queue[queue.length - 1].id);
    }
  }
}

exports.previous = previous;
