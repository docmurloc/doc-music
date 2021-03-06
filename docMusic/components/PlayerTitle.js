import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import ButtonSwitch from './ButtonSwitch';
import CustomText from './CustomText';

import {
  addTrackFavorite,
  addTrackUnfavorite,
  removeTrackFavorite,
  removeTrackUnfavorite,
} from '../APIserver/Track';

async function setFavorite(props) {
  if (props.player.unfavorite) {
    await unsetUnfavorite(props);
  }

  await addTrackFavorite(
    props.profil.access_token,
    props.track.currentTrack.id,
  );

  const action = {type: 'SET_FAVORITE_PLAYER', status: true};
  props.dispatch(action);
}

async function unsetFavorite(props) {
  await removeTrackFavorite(
    props.profil.access_token,
    props.track.currentTrack.id,
  );

  const action = {type: 'SET_FAVORITE_PLAYER', status: false};
  props.dispatch(action);
}

async function setUnfavorite(props) {
  if (props.player.favorite) {
    await unsetFavorite(props);
  }

  await addTrackUnfavorite(
    props.profil.access_token,
    props.track.currentTrack.id,
  );

  const action = {type: 'SET_UNFAVORITE_PLAYER', status: true};
  props.dispatch(action);
}

async function unsetUnfavorite(props) {
  await removeTrackUnfavorite(
    props.profil.access_token,
    props.track.currentTrack.id,
  );

  const action = {type: 'SET_UNFAVORITE_PLAYER', status: false};
  props.dispatch(action);
}

function PlayerTitle(props) {
  return (
    <View style={styles.container}>
      <ButtonSwitch
        iconOff={require('../Images/dislikeOff.png')}
        onPressOff={() => {
          setUnfavorite(props);
        }}
        iconOn={require('../Images/dislikeOn.png')}
        onPressOn={() => {
          unsetUnfavorite(props);
        }}
        statusButton={props.player.unfavorite}
      />
      <View style={styles.box}>
        <CustomText
          style={styles.title}
          ellipsizeMode={'tail'}
          numberOfLines={2}>
          {props.track.currentTrack.title}
        </CustomText>
        <CustomText
          style={styles.text}
          ellipsizeMode={'tail'}
          numberOfLines={1}>
          {props.track.currentTrack.artist}
        </CustomText>
      </View>
      <ButtonSwitch
        iconOff={require('../Images/likeOff.png')}
        onPressOff={() => {
          setFavorite(props);
        }}
        iconOn={require('../Images/likeOn.png')}
        onPressOn={() => {
          unsetFavorite(props);
        }}
        statusButton={props.player.favorite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  box: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'rgba(173, 173, 173, 1)',
  },
  text: {
    color: 'rgba(173, 173, 173, 1)',
    fontSize: 15,
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(PlayerTitle);
