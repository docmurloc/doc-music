import TrackPlayer from 'react-native-track-player';

async function start() {
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: 'http://89.87.94.17:3000/track/SAO_end_9.mp3',
        title: 'Track Title',
        artist: 'Track Artist',
        artwork: 'https://www.cdiscount.com/pdt2/7/9/9/1/700x700/auc0715235459799/rw/dadju-poison-album-cd-2019-edition-limitee.jpg'
    });

    // Start playing it
    await TrackPlayer.play();
}

export default start;