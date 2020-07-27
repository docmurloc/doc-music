import React from "react";
import {connect} from 'react-redux';

import Player from './Player'

import {StyleSheet, Text, View, Image} from "react-native";


function PlayerPage(props) {
    
    if (props.track.currentTrack == null) {
        return (
            <View>
                <Text>Player Page</Text>
            </View>
        )
    } else {
    return (
        <View style={styles.container}>
            <Image source={{uri :props.track.currentTrack.artwork}} style={styles.logo}/>
            <Player/>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        padding: 20
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayerPage);