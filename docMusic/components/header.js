import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, View, Image} from "react-native";

function HeaderLeft(props) {
    return (
        <View style={styles.horizontalDisplay}>
            <Image source={require('../Images/logoMusic.png')} style={styles.logo}/>
            <View style={styles.box}>
                <Text style={styles.title}>Doc-Music</Text>
            </View>
            <Image source={require('../Images/logoLoop.png')} style={styles.logo}/>
            <Image source={require('../Images/avatar.png')} style={styles.logo}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    box: {
        width : "50%",
        //flex: 1, 
        //alignItems: 'center', 
        justifyContent: "space-around",
        //paddingTop: 10,
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
        //width : "40 %",
        flexDirection: 'row',
        justifyContent: 'space-between',
        //backgroundColor : "red"
    },
    title: {
        fontSize: 30,
        textAlign: "center"
      },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
  
export default connect(mapStateToProps)(HeaderLeft);