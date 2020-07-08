import React, { useState } from "react";
import {connect} from 'react-redux';


import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

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

function PlaylistItem(props) {

    console.log("track current: ", props.track, !props.track.currentTrack);

    if (!props.track.currentTrack) {
        return (
            <View>
                <Text>Image not found</Text>
            </View>
        )
    }

    return(
        <View style={styles.horizontalDisplay}>
            <Image 
            source={{uri :props.track.currentTrack.artwork}} 
            style={styles.icon}/>
            <View style={styles.box}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{props.track.currentTrack.title}</Text>
                <Text style={styles.text}>{props.track.currentTrack.artist} - 4.00</Text>
            </View>
            <Image source={require('../Images/dotMenu.png')} style={styles.logo}/>
        </View>
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