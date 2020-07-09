import TrackPlayer from 'react-native-track-player';

async function play() {
    await TrackPlayer.play();
}

exports.play = play;

async function playAtId(id) {
    await TrackPlayer.skip(id);
    await TrackPlayer.play();
}

exports.playAtId = playAtId;
