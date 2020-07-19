import React, { useState } from "react";
import {connect} from 'react-redux';

import {pause, stop} from '../APIsound/pause'
import {play} from '../APIsound/play'
import {next, previous} from '../APIsound/skip';


import PlayButton from './PlayButton'
import ButtonIcon from './ButtonIcon';


import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";


function PlayerOverlay(props) {

    if (props.track.currentTrack) {
    return (
        <View style={styles.container}>
            <Image source={{uri :props.track.currentTrack.artwork}} style={styles.logo}/>
            <View style={styles.box}>
                <Text style={styles.title}
                ellipsizeMode={"tail"}
                numberOfLines={2}>{props.track.currentTrack.title}</Text>
                <Text
                style={styles.text}>{props.track.currentTrack.artist}</Text>
            </View>
            <PlayButton
                iconOff = {require('../Images/playIcon.png')}
                onPressOff = {play}
                iconOn = {require('../Images/pauseIcon.png')}
                onPressOn = {pause}
            />
            <ButtonIcon 
            icon={require('../Images/nextArrow.png')} 
            onPress={next}/>
            <ButtonIcon 
            icon={require('../Images/crossIcon.png')} 
            onPress={stop}/>

        </View>
    )
    } else {
        return (
            <View></View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        //alignItems: 'center', 
        justifyContent: 'flex-start',
        backgroundColor : 'rgba(191, 155, 63, 0.5)',
        position: 'absolute',
        left:     0,
        bottom:      0,
        width: "100%",
        height: 75,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: "space-around",


    },
    box: {
        width : 130,
        //flex: 1, 
        alignItems: 'flex-start', 
        //justifyContent: "space-around",
        //paddingTop: 10
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
    },
    content: {
        //idth : "100%",
        margin : 30,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "70 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor : "red"
    },
    text: {
      fontSize: 14,
    },
    title: {
        fontSize: 15,
        textAlign: "left",
        fontWeight: "bold"
      },
    logo: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
    },
    icon: {
        width: 65,
        height: 65,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayerOverlay);