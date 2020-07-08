import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

async function GetRandomPlaylist(props) {
    //const test = await NetInfo.fetch();
//
    //console.log("testrequest :", test);

    fetch('http://89.87.94.17:3000/playlists/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const action = {type: 'SET_CURRENT_PLAYLIST', playlist: data}
        props.dispatch(action)

        //setInfo(data.status);
        //if (data.status == "succes") {
            //props.navigation.navigate('Home');
        //}
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function GetRandomTrack(props) {
    //const test = await NetInfo.fetch();
//
    //console.log("testrequest :", test);

    fetch('http://89.87.94.17:3000/tracks/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const action = {type: 'SET_CURRENT_TRACK', track: data}
        props.dispatch(action)

        //setInfo(data.status);
        //if (data.status == "succes") {
            //props.navigation.navigate('Home');
        //}
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

function PlaylistHead(props) {

    if (!props.playlist.currentPlaylist) {
        GetRandomPlaylist(props);
        GetRandomTrack(props);

        return (
            <View>
                <Text>Image not found</Text>
            </View>
        )
    }
    console.log("current playlist:", props.playlist.currentPlaylist);
    return(
        <View style={styles.container}>
            <Image 
            source={{uri :props.playlist.currentPlaylist.artwork}} 
            style={styles.logo}/>
            <View style={styles.box}>
                <Text style={styles.title}>{props.playlist.currentPlaylist.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>Par {props.playlist.currentPlaylist.author}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{props.type} {props.info}</Text>
                <View style={styles.horizontalDisplay}>
                    <Image source={require('../Images/pencil.png')} style={styles.icon}/>
                    <Image source={require('../Images/downloadArrow.png')} style={styles.icon}/>
                    <Image source={require('../Images/dotMenu.png')} style={styles.icon}/>
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
        //flex: 1,
        padding: 5,
        width : "80 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor : "red"
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