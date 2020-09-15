import React, {useState} from 'react';
import {connect} from 'react-redux';

import {GetTrackById} from '../APIserver/Track';

import {playAtId} from '../APIsound/play';
import {remplaceTrack} from '../APIsound/track';

import {
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import CustomText from './CustomText';

async function SetTrackItem(setTrack, id) {
  let answer = await GetTrackById(id);

  setTrack(answer);
}

async function setupPlayer(idTrackList, idSelected) {
  await remplaceTrack(idTrackList);
  await playAtId(idSelected);
}

async function selectedTrack(props, track) {
  await setupPlayer([track.id], track.id);

  const action = {type: 'SET_CURRENT_TRACK', track: track};
  props.dispatch(action);

  //props.navigation.navigate('HomePage');
}

function HistoryItem(props) {
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
    <TouchableHighlight
      onPress={() => {
        selectedTrack(props, track);
      }}>
      <View style={styles.horizontalDisplay}>
        <Image source={{uri: track.artwork}} style={styles.icon} />
        <View style={styles.box}>
          <CustomText
            style={styles.title}
            numberOfLines={2}
            ellipsizeMode="tail">
            {track.title}
          </CustomText>
          <CustomText style={styles.text}>{track.artist}</CustomText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 200,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
  },
  horizontalDisplay: {
    width: 300,
    padding: 10,
    //marginLeft : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: 'rgba(215, 215, 215, 1)',
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HistoryItem);
