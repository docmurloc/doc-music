import React from 'react';
import {StyleSheet, Text} from 'react-native';

function CustomText(props) {
  if (props.style && props.style.fontWeight === 'bold') {
    const newStyle = {
      ...props.style,
      fontWeight: 'normal',
    };
    return <Text style={[styles.textBold, newStyle]}>{props.children}</Text>;
  }
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'American Typewriter Regular',
  },
  textBold: {
    fontFamily: 'American Typewriter Bold',
  },
});

export default CustomText;
