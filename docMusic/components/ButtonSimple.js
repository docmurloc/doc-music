import React from 'react';
import {TouchableHighlight} from 'react-native';

import CustomText from './CustomText';

function ButtonSimple(props) {
  return (
    <TouchableHighlight
      style={props.style}
      onPress={() => {
        props.onPress();
      }}>
      <CustomText style={props.styleText}>{props.text}</CustomText>
    </TouchableHighlight>
  );
}

export default ButtonSimple;
