
import TrackPlayer from 'react-native-track-player';
import Store from './Store/configureStore'




async function trackService() {

    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    // ...
    TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        let track = await TrackPlayer.getTrack(data.nextTrack);

        console.log("track change:", track);

        const action = {type: 'SET_CURRENT_TRACK', track: track};
        Store.dispatch(action);

    })
    
};

module.exports = trackService;