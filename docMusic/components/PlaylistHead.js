import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

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