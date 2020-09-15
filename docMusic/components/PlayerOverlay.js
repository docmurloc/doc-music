import React from 'react';
import {connect} from 'react-redux';
import Draggable from 'react-native-draggable';

import {pause, stop} from '../APIsound/pause';
import {play} from '../APIsound/play';
import {next} from '../APIsound/skip';

import PlayButton from './PlayButton';
import ButtonIcon from './ButtonIcon';

import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

function PlayerOverlay(props) {
  if (props.track.currentTrack) {
    return (
      <Draggable x={0} y={500}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate('Player')}>
            <Image
              source={{uri: props.track.currentTrack.artwork}}
              style={styles.logo}
            />
          </TouchableHighlight>
          <View
            style={styles.box}
            onPress={() => props.navigation.navigate('Player')}>
            <View>
              <Text
                style={styles.title}
                ellipsizeMode={'tail'}
                numberOfLines={2}>
                {props.track.currentTrack.title}
              </Text>
            </View>
          </View>
          <PlayButton
            iconOff={require('../Images/playIcon.png')}
            onPressOff={play}
            iconOn={require('../Images/pauseIcon.png')}
            onPressOn={pause}
          />
          <ButtonIcon
            icon={require('../Images/nextArrow.png')}
            onPress={next}
          />
          <ButtonIcon
            icon={require('../Images/crossIcon.png')}
            onPress={stop}
          />
        </View>
      </Draggable>
    );
  } else {
    return <View />;
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'rgba(188, 187, 182, 1)',
    borderRadius: 30,
    //position: 'absolute',
    //left: 0,
    //bottom: 0,
    width: '100%',
    paddingHorizontal: 15,
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    width: 130,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(PlayerOverlay);
