import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';

type CustomTextProps = {
  style: any,
  readonly children: JSX.Element
}

function CustomText({style, children} : CustomTextProps) {
  if (style && style.fontWeight === 'bold') {
    const newStyle = {
      ...style,
      fontWeight: 'normal',
    };
    return <Text style={[styles.textBold, newStyle]}>{children}</Text>;
  }
  return <Text style={[styles.text, style]}>{children}</Text>;
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
