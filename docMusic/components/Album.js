import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function Album(props) {
    return (
        <View style={styles.content}>
            <Image source={require('../Images/logoMusic.png')} style={styles.logo}/>
            <View style={styles.content2}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{props.type} {props.author} {props.info}</Text>
            </View>

        </View>
    )
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