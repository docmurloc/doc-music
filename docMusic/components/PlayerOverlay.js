import React from "react";
import {connect} from 'react-redux';

import {pause, stop} from '../APIsound/pause'
import {play} from '../APIsound/play'
import {next} from '../APIsound/skip';


import PlayButton from './PlayButton'
import ButtonIcon from './ButtonIcon';


import {StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";


function PlayerOverlay(props) {

    if (props.track.currentTrack) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
            onPress={() => props.navigation.navigate('Player')}>
                <Image source={{uri :props.track.currentTrack.artwork}} style={styles.logo}/>
            </TouchableHighlight>
            <TouchableHighlight 
            style={styles.box}
            onPress={() => props.navigation.navigate('Player')}>
                <View>
                    <Text style={styles.title}
                    ellipsizeMode={"tail"}
                    numberOfLines={2}>{props.track.currentTrack.title}</Text>
                    <Text
                    style={styles.text}>{props.track.currentTrack.artist}</Text>
                </View>
            </TouchableHighlight>
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
        justifyContent: 'flex-start',
        backgroundColor : 'rgba(191, 155, 63, 1)',
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
        alignItems: 'flex-start', 
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
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayerOverlay);