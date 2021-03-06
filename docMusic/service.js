
import TrackPlayer from 'react-native-track-player';
import Store from './Store/configureStore'

import {addUserHistoric} from './APIserver/User';

function setFavorite(idTrack) {
    const store = Store.getState();
    const arrayLike = store.profil.trackFavorite;
    const arrayDislike = store.profil.trackUnfavorite;


    const action2 = {type: 'SET_UNFAVORITE_PLAYER', status: false};
    Store.dispatch(action2);

    const action3 = {type: 'SET_FAVORITE_PLAYER', status: false};
    Store.dispatch(action3);

    if (arrayLike.includes(idTrack)) {
        const action = {type: 'SET_FAVORITE_PLAYER', status: true};
        Store.dispatch(action);
    }

    if (arrayDislike.includes(idTrack)) {
        const action = {type: 'SET_UNFAVORITE_PLAYER', status: true};
        Store.dispatch(action);
    }
}

async function trackService() {

    TrackPlayer.addEventListener('remote-play', () => {
        const action = {type: 'SET_PLAY', status: true};
        Store.dispatch(action);

        TrackPlayer.play();
    });

    TrackPlayer.addEventListener('remote-pause', () => {
        const action = {type: 'SET_PLAY', status: false};
        Store.dispatch(action);
        TrackPlayer.pause();
    });

    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy());

    TrackPlayer.addEventListener('playback-track-changed', async (data) => {
        let track = await TrackPlayer.getTrack(data.nextTrack);

        if (track) {
            const store = Store.getState();
            setFavorite(track.id);
            await addUserHistoric(store.profil.access_token, track.id);
            const action = {type: 'SET_CURRENT_TRACK', track: track};
            Store.dispatch(action);
        }
    })

    TrackPlayer.addEventListener('playback-queue-ended', async (data) => {
    })
    
};

module.exports = trackService;