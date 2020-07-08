import TrackPlayer from 'react-native-track-player';

async function pause() {
    await TrackPlayer.setupPlayer();

    await TrackPlayer.pause();
}

export default pause;
