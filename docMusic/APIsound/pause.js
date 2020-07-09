import TrackPlayer from 'react-native-track-player';
import Store from '../Store/configureStore'


async function pause() {
    await TrackPlayer.pause();

    console.log("pause event");

        const action = {type: 'SET_PLAY', status: false};
        Store.dispatch(action);
        TrackPlayer.pause();
}

export default pause;
