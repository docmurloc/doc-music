import React from 'react';
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

import * as Progress from 'react-native-progress';

import {StyleSheet, Text, View} from 'react-native';

function convertSecondeToMinSec(seconde) {
  let min = Math.floor(seconde / 60);
  let sec = Math.floor(seconde % 60);

  return '' + min + ':' + sec;
}

class MyPlayerBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={styles.container}>
        <Progress.Bar
          progress={this.getProgress()}
          buffered={this.getBufferedProgress()}
          width={300}
          color={'black'}
          height={10}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  textCenter: {
    alignItems: 'center',
    padding: 5,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(MyPlayerBar);
