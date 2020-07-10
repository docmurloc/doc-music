import React, { useState } from "react";
import {connect} from 'react-redux';

import pause from '../APIsound/pause'
import {play} from '../APIsound/play'
import {next, previous} from '../APIsound/skip';
import {remplaceTrack, randomTrack} from '../APIsound/track'

import PlayerTitle from './PlayerTitle'
import ButtonSwitch from './ButtonSwitch'
import PlayButton from './PlayButton'
import ButtonIcon from './ButtonIcon';
import * as Progress from 'react-native-progress';

import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";


function Player(props) {
    const [reponse, setreponse] = useState("");
    return (
        <View style={styles.container}>
            <PlayerTitle/>
            <View style={styles.box}>
                <Text style={styles.title}>{props.track.currentTrack.artist}</Text>
                <Progress.Bar progress={0.3} width={300} />
                <View style={styles.horizontalDisplay}>
                    <View style={styles.textCenter}>
                        <Text style={styles.text}>0.00</Text>
                    </View>
                    <View style={styles.textCenter}>
                        <Text style={styles.text}>4.35</Text>
                    </View>
                </View>
            </View>
            <View style={styles.horizontalDisplay}>
                <ButtonSwitch
                iconOff = {require('../Images/crossingArrowOff.png')}
                onPressOff = {() => {
                    randomTrack(props.playlist.currentPlaylist.trackListId, props.track.currentTrack.id);
                    const action = {type: 'SET_RANDOM', status: true}
                    props.dispatch(action)
                }}
                iconOn = {require('../Images/crossingArrowOn.png')}
                onPressOn = {() => {
                    remplaceTrack(props.playlist.currentPlaylist.trackListId, props.track.currentTrack.id);
                    const action = {type: 'SET_RANDOM', status: false}
                    props.dispatch(action)
                }}
                statusButton= {props.player.random}
                />
                <ButtonIcon 
                icon={require('../Images/previousArrow.png')} 
                onPress={previous}/>
                <PlayButton
                iconOff = {require('../Images/playIcon.png')}
                onPressOff = {play}
                iconOn = {require('../Images/pauseIcon.png')}
                onPressOn = {pause}
                />
                <ButtonIcon 
                icon={require('../Images/nextArrow.png')} 
                onPress={next}/>
                <ButtonSwitch
                iconOff = {require('../Images/loopArrowOff.png')}
                onPressOff = {() => {
                    const action = {type: 'SET_LOOP', status: true}
                    props.dispatch(action)
                }}
                iconOn = {require('../Images/loopArrowOn.png')}
                onPressOn = {() => {
                    const action = {type: 'SET_LOOP', status: false}
                    props.dispatch(action)
                }}
                statusButton= {props.player.loop}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height : "50%", 
        alignItems: 'center', 
        justifyContent: "space-between",
        padding: 10,
        backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    textCenter: {
        //flex: 1,
        //height : "60%",
        width: "40%",
        alignItems: 'center', 
        //justifyContent: "space-between",
        //padding: 10,
        backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    box: {
        width : "100%",
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "center",
        paddingTop: 10,
        backgroundColor : 'red'
        
    },
    content: {
        //idth : "100%",
        margin : 30,
        flex: 1, 
        justifyContent: "space-around",
        backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "100 %",
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor : "green",
        paddingVertical : 5
    },
    text: {
      fontSize: 14,
      textAlign: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center"
      },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(Player);