import React, { useState } from "react";
import {connect} from 'react-redux';

import ButtonSwitch from './ButtonSwitch'

import {addAlbumFavorite, removeAlbumFavorite} from '../APIserver/Album'

import {StyleSheet, Text, View, Image} from "react-native";

async function setFavorite(props) {
    await addAlbumFavorite(props.profil.access_token, props.playlist.currentPlaylist.album)

    const action = {type: 'STATE_FAVORITE_ALBUM', status: true}
    props.dispatch(action)
}

async function unsetFavorite(props) {
    await removeAlbumFavorite(props.profil.access_token, props.playlist.currentPlaylist.album)

    const action = {type: 'STATE_FAVORITE_ALBUM', status: false}
    props.dispatch(action)
}

function PlaylistHead(props) {

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
        flexDirection: 'row',
        justifyContent: "flex-start",
        padding: 10
    },
    box: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        padding: 10,
        marginLeft: 10, 
        backgroundColor : 'rgba(215, 215, 215, 1)',
        borderRadius: 15
    },
    horizontalDisplay: {
        padding: 5,
        width : "80 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
      fontSize: 13,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
      },
    logo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlaylistHead);