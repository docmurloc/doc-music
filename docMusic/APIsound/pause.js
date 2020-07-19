import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore'


async function pause() {
    await TrackPlayer.pause();

    const action = {type: 'SET_PLAY', status: false};
    Store.dispatch(action);
}

exports.pause = pause;

async function stop() {
    await TrackPlayer.pause();
    
    const action = {type: 'SET_CURRENT_TRACK', track: null};
    Store.dispatch(action);
}

exports.stop = stop;
