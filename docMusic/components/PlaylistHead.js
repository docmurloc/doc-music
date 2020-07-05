import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function PlaylistHead(props) {
    return(
        <View style={styles.container}>
            <Image source={require('../Images/logoMusic.png')} style={styles.logo}/>
            <View style={styles.box}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{props.type} {props.author} {props.info}</Text>
                <View style={styles.horizontalDisplay}>
                    <Image source={require('../Images/logoMusic.png')} style={styles.icon}/>
                    <Image source={require('../Images/logoMusic.png')} style={styles.icon}/>
                    <Image source={require('../Images/logoMusic.png')} style={styles.icon}/>
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
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlaylistHead);