import React from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ButtonSimple);
