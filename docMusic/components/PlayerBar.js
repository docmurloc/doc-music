import React from 'react';
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

import * as Progress from 'react-native-progress';

import {StyleSheet, View} from 'react-native';

class MyPlayerBar extends TrackPlayer.ProgressComponent {
  render() {
    return (
      <View style={styles.container}>
        <Progress.Bar
          progress={this.getProgress()}
          buffered={this.getBufferedProgress()}
          width={300}
          color={'rgba(173, 173, 173, 1)'}
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
