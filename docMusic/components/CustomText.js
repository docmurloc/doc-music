import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Image, View, Text} from 'react-native';

function CustomText(props) {
    console.log("custom ", props.style.fontWeight);
    if (props.style.fontWeight && props.style.fontWeight == 'bold') {
        const newStyle = {
            ...props.style,
            fontWeight : 'normal'
        }
        return (<Text style={[styles.textBold, newStyle]}>{props.children}</Text>)
    }
  return (
    <Text style={[styles.text, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "American Typewriter Regular"
    },
    textBold: {
        fontFamily: "American Typewriter Bold",
    }
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(CustomText);
