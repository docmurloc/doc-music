import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

function HomePage(props) {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
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
        //idth : "100%",
        margin : 30,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "70 %",
        flexDirection: 'row',
        justifyContent: 'space-around',
        //backgroundColor : "red"
    },
    text: {
      fontSize: 20,
    },
    title: {
        fontSize: 30,
        textAlign: "center"
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
export default connect(mapStateToProps)(HomePage);