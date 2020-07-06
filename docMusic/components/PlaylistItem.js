import React, { useState } from "react";
import {connect} from 'react-redux';


import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function PlaylistItem(props) {

    return(
        <View style={styles.horizontalDisplay}>
            <Image source={require('../Images/logoMusic.png')} style={styles.icon}/>
            <View style={styles.box}>
                <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Title song</Text>
                <Text style={styles.text}>author - 4.00</Text>
            </View>
            <Image source={require('../Images/logoMusic.png')} style={styles.logo}/>
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