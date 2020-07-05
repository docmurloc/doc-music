import React, { useState } from "react";
import {connect} from 'react-redux';

import PlaylistHead from './PlaylistHead'
import PlaylistButton from './PlaylistButton'
import PlaylistItem from './PlaylistItem'


import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function PlaylistPage(props) {

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          type: "playlist",
          author: " - Pierre ANTOINE",
          info: " - 10 song"
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          type: "playlist",
          author: " - Pierre ANTOINE",
          info: " - 10 song"
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          type: "playlist",
          author: " - Pierre ANTOINE",
          info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d722',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d73',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d724',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d75',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d76',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d77',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d78',
            title: 'Third Item',
            type: "playlist",
            author: " - Pierre ANTOINE",
            info: " - 10 song"
        },

      ];

    return(
        <View style={styles.container}>
            <View style={styles.box2}>
                <PlaylistHead title={"Song Title"} type={"Playlist"} author={" - Pierre ANTOINE"} info={" - 10 songs"}/>
                <View style={styles.horizontalDisplay}>
                    <PlaylistButton/>
                    <PlaylistButton/>
                </View>
            </View>
            <View style={styles.box}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <PlaylistItem/>}
                keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
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
        backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "90 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor : "red"
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