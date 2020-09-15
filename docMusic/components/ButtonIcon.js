import React from 'react';
import {StyleSheet, Image, TouchableHighlight} from 'react-native';

function ButtonIcon(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Image source={props.icon} style={styles.icon} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default ButtonIcon;
