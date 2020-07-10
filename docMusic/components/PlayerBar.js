
import React, { useState } from "react";
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';

import * as Progress from 'react-native-progress';



import {GetRandomTrack, GetTrackById} from '../APIserver/Track';

import {playAtId} from '../APIsound/play';
import {remplaceTrack} from '../APIsound/track';

import {StyleSheet, Text, TextInput , View, Image, Button, TouchableHighlight} from "react-native";

function convertSecondeToMinSec(seconde) {
    let min = Math.floor(seconde/60);
    let sec = Math.floor(seconde%60);

    return "" + min + ":" + sec;

}

function getTotalSecond() {
    
}

class MyPlayerBar extends TrackPlayer.ProgressComponent {

    render() {
        return (
            <View style={styles.container}>
                <Progress.Bar
                    progress={this.getProgress()}
                    buffered={this.getBufferedProgress()}
                    width={300}
                    color={"black"}
                    height={10}
                />
                <View style={styles.textCenter}>
                    <Text style={styles.text}>{convertSecondeToMinSec(this.state.position)}</Text>
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height : "50%", 
        alignItems: 'center', 
        justifyContent: "space-between",
        padding: 10,
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    textCenter: {
        //flex: 1,
        //height : "60%",
        //width: "40%",
        alignItems: 'center', 
        //justifyContent: "space-between",
        padding: 5,
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',

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
export default connect(mapStateToProps)(MyPlayerBar);