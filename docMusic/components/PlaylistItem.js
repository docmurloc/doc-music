import React, {useState} from 'react';
import {connect} from 'react-redux';

import {GetTrackById} from '../APIserver/Track';

import {playAtId} from '../APIsound/play';
import {remplaceTrack} from '../APIsound/track';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

async function SetTrackItem(setTrack, id) {
  let answer = await GetTrackById(id);

  setTrack(answer);
}

async function setupPlayer(idTrackList, idSelected) {
  await remplaceTrack(idTrackList);
  await playAtId(idSelected);
}

async function selectedTrack(props, track) {
  await setupPlayer(props.playlist.currentPlaylist.trackListId, track.id);

  const action = {type: 'SET_CURRENT_TRACK', track: track};
  props.dispatch(action);
}

function PlaylistItem(props) {
  const [track, setTrack] = useState(null);

  if (!track) {
    SetTrackItem(setTrack, props.id);
    return (
      <View>
        <ActivityIndicator size="large" color="rgba(215, 215, 215, 1)" />
      </View>
    );
  }

  if (
    props.track.currentTrack &&
    props.track.currentTrack.title === track.title
  ) {
    return (
      <TouchableHighlight onPress={() => props.navigation.navigate('Player')}>
        <View style={styles.horizontalDisplaySelected}>
          <Image source={{uri: track.artwork}} style={styles.icon} />
          <View style={styles.box}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {track.title}
            </Text>
            <Text style={styles.text}>{track.artist}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight onPress={() => selectedTrack(props, track)}>
        <View style={styles.horizontalDisplay}>
          <Image source={{uri: track.artwork}} style={styles.icon} />
          <View style={styles.box}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {track.title}
            </Text>
            <Text style={styles.text}>{track.artist}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: '80%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  horizontalDisplay: {
    width: '100 %',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(215, 215, 215, 1)',
  },
  horizontalDisplaySelected: {
    width: '100 %',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(235, 235, 235, 1)',
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(PlaylistItem);
