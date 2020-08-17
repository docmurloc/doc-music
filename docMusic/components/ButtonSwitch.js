import React from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Image, TouchableHighlight} from 'react-native';

function ButtonSwitch(props) {
  const changeState = () => {
    if (props.statusButton) {
      props.onPressOn();
    } else {
      props.onPressOff();
    }
  };

  if (props.statusButton) {
    return (
      <TouchableHighlight onPress={changeState}>
        <Image source={props.iconOn} style={styles.icon} />
      </TouchableHighlight>
    );
  } else {
    return (
      <TouchableHighlight onPress={changeState}>
        <Image source={props.iconOff} style={styles.icon} />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ButtonSwitch);
