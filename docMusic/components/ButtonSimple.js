import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, TouchableHighlight} from 'react-native';

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
  
  const styles = StyleSheet.create({
    container: {
    },
    box: {
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 10,
    },
    content: {
      margin: 30,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderRadius: 20,
    },
    horizontalDisplay: {
      width: '70 %',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    title: {
      fontSize: 30,
      textAlign: 'center',
    },
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    },
  });
  
  const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps)(ButtonSimple);