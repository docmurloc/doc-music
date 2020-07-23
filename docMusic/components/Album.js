import React, { useState } from "react";
import {connect} from 'react-redux';
import Store from '../Store/configureStore'

import {StyleSheet, Text, TouchableHighlight , View, Image, Button, FlatList} from "react-native";

import {GetRandomAlbum, GetAlbumById} from '../APIserver/Album';
import {GetPlaylistById} from '../APIserver/Playlist'

//props.navigation.navigate('SignUp')

async function SetAlbumItem(setAlbum, id = null) {
    let answer = null;

    if (id < 100) {
        answer = await GetRandomAlbum();
    } else {
        answer = await GetAlbumById(id);
    }


    setAlbum(answer);
}

async function SetAlbumFavorite(idTrack) {
    const store = Store.getState();

    const arrayLike = store.profil.albumFavorite;

    console.log("album Favorite", arrayLike, "id ", idTrack, arrayLike.includes(idTrack));

    const action = {type: 'STATE_FAVORITE_ALBUM', status: false};
    Store.dispatch(action);

    if (arrayLike.includes(idTrack)) {
        const action2 = {type: 'STATE_FAVORITE_ALBUM', status: true};
        Store.dispatch(action2);    
    }


}

async function selectedAlbum(props, id, album) {
    //console.log("slected props",props);

    let answer = await GetPlaylistById(id);
    SetAlbumFavorite(album);
    const action = {type: 'SET_CURRENT_PLAYLIST', playlist: answer};
    props.dispatch(action);

    props.navigation.navigate('playlist');
}

function Album(props) {



    const [album, setAlbum] = useState(null);
    if (!album) {
        console.log("album page props ", props.id);
        SetAlbumItem(setAlbum, props.id);
        return (
            <View>
                <Text>album not found</Text>
            </View>
        )
    } else {
        return (
            <TouchableHighlight
            onPress={() => selectedAlbum(props, album.playListId, album.id)}
            >
            <View style={styles.content}>
            <Image
             source={{uri : album.artwork}} 
             style={styles.logo}/>
                <View style={styles.content2}>
                    <Text style={styles.title}>{album.title}</Text>
                    <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{album.genre} {album.artist}</Text>
                </View>
                <Text>LOL</Text>
    
            </View>
            </TouchableHighlight>
        )    
    }


}

const styles = StyleSheet.create({
    content2: {
        padding: 5,
        //backgroundColor: "yellow"
        //flex: 1, 
        //alignItems: 'center', 
        //justifyContent: 'center'
    },
    box: {
        width : "100%",
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        paddingTop: 10
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
    },
    content: {
        width: 130,
        //height: 170,
        padding: 5,
        //idth : "100%",
        //margin : 30,
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        //backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "70 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor : "red"
    },
    text: {
      fontSize: 12,
      textAlign: "left"

    },
    title: {
        fontSize: 12,
        textAlign: "left",
        fontWeight: "bold"

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
export default connect(mapStateToProps)(Album);