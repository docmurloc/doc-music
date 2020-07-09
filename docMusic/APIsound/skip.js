import TrackPlayer from 'react-native-track-player';

async function next() {
    await TrackPlayer.skipToNext();
}

exports.next = next;

async function previous() {
    await TrackPlayer.skipToPrevious();
}

exports.previous = previous;