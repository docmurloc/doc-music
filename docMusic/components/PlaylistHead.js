import React, { useState } from "react";
import {connect} from 'react-redux';

import ButtonSwitch from './ButtonSwitch'

import {addAlbumFavorite, removeAlbumFavorite} from '../APIserver/Album'

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

async function setFavorite(props) {
    console.log("props favorite in setFavorite", props.profil);

    await addAlbumFavorite(props.profil.access_token, props.playlist.currentPlaylist.id)
    const action = {type: 'STATE_FAVORITE_ALBUM', status: true}
    props.dispatch(action)
    console.log("setFavorite end");


}

async function unsetFavorite(props) {
    await removeAlbumFavorite(props.profil.access_token, props.playlist.currentPlaylist.id)
    const action = {type: 'STATE_FAVORITE_ALBUM', status: false}
    props.dispatch(action)
}

function PlaylistHead(props) {

    console.log("playlist head page props ", props.profil);


    return(
        <View style={styles.container}>
            <Image 
            source={{uri :props.artwork}} 
            style={styles.logo}/>
            <View style={styles.box}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{props.nbSongs} Songs</Text>
                <View style={styles.horizontalDisplay}>
                <ButtonSwitch
                iconOff = {require('../Images/emptyHeart.png')}
                onPressOff = {() => {
                    setFavorite(props)
                }}
                iconOn = {require('../Images/heart.png')}
                onPressOn = {() => {
                    unsetFavorite(props);
                }}
                statusButton= {props.album.favorite}
                />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height: "30%",
        //alignItems: 'center', 
        //justifyContent: 'center',
        //backgroundColor : 'red',
        flexDirection: 'row',
        justifyContent: "flex-start",
        padding: 10


    },
    box: {
        //width : "50%",

        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        padding: 10,
        marginLeft: 10, 
        backgroundColor : 'rgba(215, 215, 215, 1)',
        borderRadius: 15
        
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
        //flex: 1,
        padding: 5,
        width : "80 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor : "red"
    },
    text: {
      fontSize: 13,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
        //textAlign: "center"
      },
    titleView: {
        //backgroundColor: "green",
        padding: 10,
    },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlaylistHead);