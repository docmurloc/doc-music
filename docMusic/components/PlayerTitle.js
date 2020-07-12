import React, { useState } from "react";
import {connect} from 'react-redux';


import ButtonSwitch from './ButtonSwitch'

import {addUserFavorite, addUserUnfavorite, removeUserFavorite, removeUserUnfavorite} from '../APIserver/User';

import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

async function setFavorite(props) {
    console.log("props favorite in setFavorite", props.profil.trackFavorite);

    if (props.player.unfavorite) {
       await unsetUnfavorite(props);
    }
    await addUserFavorite(props.profil.access_token, props.track.currentTrack.id)
    const action = {type: 'SET_FAVORITE_PLAYER', status: true}
    props.dispatch(action)
    console.log("setFavorite end");


}

async function unsetFavorite(props) {
    await removeUserFavorite(props.profil.access_token, props.track.currentTrack.id)
    const action = {type: 'SET_FAVORITE_PLAYER', status: false}
    props.dispatch(action)
}

async function setUnfavorite(props) {
    if (props.player.favorite) {
       await unsetFavorite(props);
    }
    await addUserUnfavorite(props.profil.access_token, props.track.currentTrack.id)
    const action = {type: 'SET_UNFAVORITE_PLAYER', status: true}
    props.dispatch(action)
}

async function unsetUnfavorite(props) {
    await removeUserUnfavorite(props.profil.access_token, props.track.currentTrack.id)
    const action = {type: 'SET_UNFAVORITE_PLAYER', status: false}
    props.dispatch(action)
}

function PlayerTitle(props) {
    const [stateLike, setStateLike] = useState("");

    //console.log("props favorite in playerTitle", props.profil.trackFavorite);
    //console.log("props player in playerTitle", props.player);
    return (
        <View style={styles.container}>
            <ButtonSwitch
            iconOff = {require('../Images/dislikeOff.png')}
            onPressOff = {() => {
                setUnfavorite(props)
            }}
            iconOn = {require('../Images/dislikeOn.png')}
            onPressOn = {() => {
                unsetUnfavorite(props)
            }}
            statusButton= {props.player.unfavorite}

            />
            <View style={styles.box}>
                <Text style={styles.title}
                    ellipsizeMode={"tail"}
                    numberOfLines={3}>{props.track.currentTrack.title}</Text>
            </View>
            <ButtonSwitch
            iconOff = {require('../Images/likeOff.png')}
            onPressOff = {() => {
                setFavorite(props)
            }}
            iconOn = {require('../Images/likeOn.png')}
            onPressOn = {() => {
                unsetFavorite(props);
            }}
            statusButton= {props.player.favorite}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width : "100%",
        alignItems: 'center', 
        justifyContent: 'space-around',
        padding: 5,
        flexDirection: 'row',
        //backgroundColor: 'red'

    },
    box: {
        width : "40%",
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        paddingTop: 10
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
      fontSize: 20,
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
      },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayerTitle);