import React, { useState } from "react";
import {connect} from 'react-redux';

import PlaylistHead from './PlaylistHead'
import PlaylistButton from './PlaylistButton'
import PlaylistItem from './PlaylistItem'
import PlayerOverlay from './PlayerOverlay'

import {GetRandomPlaylist} from '../APIserver/Playlist'
import {remplaceTrack, randomTrack} from '../APIsound/track'



import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

async function SetPlaylistRandom(props) {
    let answer = await GetRandomPlaylist();

    const action = {type: 'SET_CURRENT_PLAYLIST', playlist: answer};
    props.dispatch(action);
}


function PlaylistPage(props) {

    //console.log("playlist page props ", props.profil);


      if (!props.playlist.currentPlaylist) {
        return (
            <View>
                <Text>Playlist not found</Text>
            </View>
        )
    } else {
        return(
            <View style={styles.container}>
                <View style={styles.box2}>
                    <PlaylistHead 
                    title={props.playlist.currentPlaylist.title} 
                    artwork={props.playlist.currentPlaylist.artwork} 
                    author={props.playlist.currentPlaylist.author} 
                    nbSongs={props.playlist.currentPlaylist.trackListId.length}/>
                    <View style={styles.horizontalDisplay}>
                        <PlaylistButton 
                        title={"aléatoire"}
                        icon={require('../Images/crossingArrowOn.png')}
                        onPress={() =>{
                            randomTrack(props.playlist.currentPlaylist.trackListId);
                            props.navigation.navigate('Player');

                        }}/>
                        <PlaylistButton 
                        title={"lire"}
                        icon={require('../Images/playIcon.png')}
                        onPress={() => {
                            remplaceTrack(props.playlist.currentPlaylist.trackListId);
                            props.navigation.navigate('Player');
                        }}/>
                    </View>
                </View>
                <View style={styles.box}>
                <FlatList
                    data={props.playlist.currentPlaylist.trackListId}
                    renderItem={({ item }) => <PlaylistItem {...props} id={item}/>}
                    keyExtractor={item => item}
                    />
                </View>
                <PlayerOverlay {...props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //height: "30%",
        alignItems: 'center', 
        //justifyContent: 'center',
        //backgroundColor : 'red'
    },
    box: {
        //width : "100%",
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        height: "67%"
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
    },
    box2: {
        height : "33%",
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        //height: "67%"
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
    },
    content: {
        //idth : "100%",
        margin : 30,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        backgroundColor : 'rgba(215, 215, 215, 1)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "90 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5
        //backgroundColor : "red"
    },
    text: {
      fontSize: 20,
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
        width: 100,
        height: 100,
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
export default connect(mapStateToProps)(PlaylistPage);