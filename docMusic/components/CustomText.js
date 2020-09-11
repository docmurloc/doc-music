import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Image, View, Text} from 'react-native';

function CustomText(props) {
  return (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "American Typewriter Regular"
    },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(CustomText);
