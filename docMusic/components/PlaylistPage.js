import React from "react";
import {connect} from 'react-redux';
import {StyleSheet, Text, View, FlatList} from "react-native";

import PlaylistHead from './PlaylistHead'
import PlaylistButton from './PlaylistButton'
import PlaylistItem from './PlaylistItem'
import PlayerOverlay from './PlayerOverlay'

import {GetRandomPlaylist} from '../APIserver/Playlist'
import {remplaceTrack, randomTrack} from '../APIsound/track'

function PlaylistPage(props) {

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
        alignItems: 'center', 
    },
    box: {
        alignItems: 'center', 
        justifyContent: "space-around",
        height: "67%"
    },
    box2: {
        height : "33%",
        alignItems: 'center', 
        justifyContent: "space-around",
    },
    horizontalDisplay: {
        width : "90 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 5
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlaylistPage);