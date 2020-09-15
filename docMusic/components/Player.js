import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import {pause} from '../APIsound/pause';
import {play} from '../APIsound/play';
import {next, previous} from '../APIsound/skip';
import {remplaceTrack, randomTrack} from '../APIsound/track';

import MyPlayerBar from './PlayerBar';
import PlayerTitle from './PlayerTitle';
import ButtonSwitch from './ButtonSwitch';
import PlayButton from './PlayButton';
import ButtonIcon from './ButtonIcon';

function Player(props) {
  return (
    <View style={styles.container}>
      <PlayerTitle />
      <View style={styles.box}>
        <MyPlayerBar />
      </View>
      <View style={styles.horizontalDisplay}>
        <ButtonSwitch
          iconOff={require('../Images/crossingArrowOff.png')}
          onPressOff={() => {
            randomTrack(
              props.playlist.currentPlaylist.trackListId,
              props.track.currentTrack.id,
            );
            const action = {type: 'SET_RANDOM', status: true};
            props.dispatch(action);
          }}
          iconOn={require('../Images/crossingArrowOn.png')}
          onPressOn={() => {
            remplaceTrack(
              props.playlist.currentPlaylist.trackListId,
              props.track.currentTrack.id,
            );
            const action = {type: 'SET_RANDOM', status: false};
            props.dispatch(action);
          }}
          statusButton={props.player.random}
        />
        <ButtonIcon
          icon={require('../Images/previousArrow.png')}
          onPress={previous}
        />
        <PlayButton
          iconOff={require('../Images/playIcon.png')}
          onPressOff={play}
          iconOn={require('../Images/pauseIcon.png')}
          onPressOn={pause}
        />
        <ButtonIcon icon={require('../Images/nextArrow.png')} onPress={next} />
        <ButtonSwitch
          iconOff={require('../Images/loopArrowOff.png')}
          onPressOff={() => {
            const action = {type: 'SET_LOOP', status: true};
            props.dispatch(action);
          }}
          iconOn={require('../Images/loopArrowOn.png')}
          onPressOn={() => {
            const action = {type: 'SET_LOOP', status: false};
            props.dispatch(action);
          }}
          statusButton={props.player.loop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    //backgroundColor: 'rgba(215, 215, 215, 1)',
    //borderRadius: 15,
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  horizontalDisplay: {
    width: '100 %',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: 'rgba(173, 173, 173, 1)',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(173, 173, 173, 1)',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Player);
