import React from "react";
import {connect} from 'react-redux';


import {StyleSheet, Image, TouchableHighlight} from "react-native";

function PlayButton(props) {

    const changeState = () => {
        if (props.player.play) {
            props.onPressOn();
        } else {
            props.onPressOff();
        }
    }

    if (props.player.play) {
        return (
            <TouchableHighlight 
            onPress={changeState}
            >
                <Image source={props.iconOn} style={styles.icon}/>
            </TouchableHighlight>
        )
    } else {
        return(
            <TouchableHighlight 
            onPress={changeState}
            >
                <Image source={props.iconOff} style={styles.icon}/>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayButton);