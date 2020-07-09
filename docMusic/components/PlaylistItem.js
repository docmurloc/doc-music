import React, { useState } from "react";
import {connect} from 'react-redux';

import {GetRandomTrack, GetTrackById} from '../APIserver/Track';

import {StyleSheet, Text, TextInput , View, Image, Button, TouchableHighlight} from "react-native";

async function SetTrackItem(setTrack, id) {
    let answer = await GetTrackById(id);

    setTrack(answer);
}

function selectedTrack(props, track) {
    console.log("slected props",props);
    const action = {type: 'SET_CURRENT_TRACK', track: track};
    props.dispatch(action);

    props.navigation.navigate('Player');
}

function PlaylistItem(props) {
    const [track, setTrack] = useState(null);


    console.log("track current: ", track);

    if (!track) {
        SetTrackItem(setTrack, props.id);
        return (
            <View>
                <Text>Image not found</Text>
            </View>
        )
    }

    return(
        <TouchableHighlight
        onPress={() => selectedTrack(props, track)}>
            <View style={styles.horizontalDisplay}>
                <Image 
                source={{uri :track.artwork}} 
                style={styles.icon}/>
                <View style={styles.box}>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{track.title}</Text>
                    <Text style={styles.text}>{track.artist} - 4.00</Text>
                </View>
                <Image source={require('../Images/dotMenu.png')} style={styles.logo}/>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height: "30%",
        //alignItems: 'center', 
        //justifyContent: 'center',
        //backgroundColor : 'red'
    },
    box: {
        width : "80%",
        //flex: 1, 
        alignItems: 'flex-start', 
        justifyContent: "space-around",
        paddingHorizontal: 15,
        backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
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
        width : "100 %",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor : "green",
        borderRadius: 5
    },
    text: {
      fontSize: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
        //textAlign: "center"
      },
    titleView: {
        //backgroundColor: "green",
        padding: 10,
    },
    logo: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    icon: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlaylistItem);