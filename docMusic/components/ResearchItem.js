import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import {GetTrackById} from '../APIserver/Track';
import {remplaceTrack} from '../APIsound/track';

async function SetTrackItem(setTrack, id) {
  let answer = await GetTrackById(id);

  setTrack(answer);
}

async function setupPlayer(idTrackList, idSelected) {
  await remplaceTrack(idTrackList);
}

async function selectedTrack(props, track) {
  await setupPlayer([track.id], track.id);

  const action = {type: 'SET_CURRENT_TRACK', track: track};
  props.dispatch(action);

  props.navigation.navigate('Player');
}

function ResearchItem(props) {
  const [track, setTrack] = useState(null);

  if (!track) {
    SetTrackItem(setTrack, props.id);
    return (
      <View>
        <ActivityIndicator size="large" color="rgba(215, 215, 215, 1)" />
      </View>
    );
  }

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
export default connect(mapStateToProps)(ResearchItem);
