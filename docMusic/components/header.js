import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Image} from 'react-native';

import ButtonIcon from './ButtonIcon';
import Store from '../Store/configureStore';
import TrackPlayer from 'react-native-track-player';

async function logOut() {
  await TrackPlayer.destroy();
  const action = {type: 'SET_CURRENT_TRACK', track: null};
  Store.dispatch(action);
  const action2 = {type: 'CLEAN_PROFILE'};
  Store.dispatch(action2);
}

function HeaderLeft(props) {
  return (
    <View style={styles.horizontalDisplay}>
      <Image source={require('../Images/logoMusic.png')} style={styles.logo} />
      <View style={styles.box}>
        <Text style={styles.title}>Doc-Music</Text>
      </View>
      <ButtonIcon icon={require('../Images/logoutIcon.png')} onPress={logOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '50%',
    justifyContent: 'space-around',
  },
  horizontalDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
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

export default connect(mapStateToProps)(HeaderLeft);
