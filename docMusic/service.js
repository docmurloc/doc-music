
import TrackPlayer from 'react-native-track-player';
import Store from './Store/configureStore'




async function trackService() {

    TrackPlayer.addEventListener('remote-play', () => {

        console.log("Play event");

        const action = {type: 'SET_PLAY', status: true};
        Store.dispatch(action);

        TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', () => {

        console.log("pause event");

        const action = {type: 'SET_PLAY', status: false};
        Store.dispatch(action);
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    // ...
    TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        let track = await TrackPlayer.getTrack(data.nextTrack);
        console.log("track change:", track);


        let queue = await TrackPlayer.getQueue();
        console.log("queue change:", queue);


        const action = {type: 'SET_CURRENT_TRACK', track: track};
        Store.dispatch(action);

    })

    TrackPlayer.addEventListener('playback-queue-ended', async (data) => {
        //let track = await TrackPlayer.getTrack(data.nextTrack);

        console.log("track end:", data);

        //const action = {type: 'SET_CURRENT_TRACK', track: track};
        //Store.dispatch(action);

    })
    
};

module.exports = trackService;