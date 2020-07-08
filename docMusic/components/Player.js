import React, { useState } from "react";
import {connect} from 'react-redux';

import PlayerTitle from './PlayerTitle'
import * as Progress from 'react-native-progress';

import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";


function Player(props) {
    const [reponse, setreponse] = useState("");
    return (
        <View style={styles.container}>
            <PlayerTitle/>
            <View style={styles.box}>
                <Text style={styles.title}>author</Text>
                <Progress.Bar progress={0.3} width={300} />
                <View style={styles.horizontalDisplay}>
                    <View style={styles.textCenter}>
                        <Text style={styles.text}>0.00</Text>
                    </View>
                    <View style={styles.textCenter}>
                        <Text style={styles.text}>4.35</Text>
                    </View>
                </View>
            </View>
            <View style={styles.horizontalDisplay}>
                <Image source={require('../Images/crossingArrow.png')} style={styles.icon}/>
                <Image source={require('../Images/previousArrow.png')} style={styles.icon}/>
                <Image source={require('../Images/playIcon.png')} style={styles.icon}/>
                <Image source={require('../Images/nextArrow.png')} style={styles.icon}/>
                <Image source={require('../Images/loopArrow.png')} style={styles.icon}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        height : "50%", 
        alignItems: 'center', 
        justifyContent: "space-between",
        padding: 10,
        backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    textCenter: {
        //flex: 1,
        //height : "60%",
        width: "40%",
        alignItems: 'center', 
        //justifyContent: "space-between",
        //padding: 10,
        backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    box: {
        width : "100%",
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: "center",
        paddingTop: 10,
        backgroundColor : 'red'
        
    },
    content: {
        //idth : "100%",
        margin : 30,
        flex: 1, 
        justifyContent: "space-around",
        backgroundColor : 'rgba(215, 215, 215, 0.9)',
        borderRadius: 20
        
    },
    horizontalDisplay: {
        width : "100 %",
        flexDirection: 'row',
        justifyContent: "space-around",
        backgroundColor : "green",
        paddingVertical : 5
    },
    text: {
      fontSize: 14,
      textAlign: "center"
    },
    title: {
        fontSize: 20,
        textAlign: "center"
      },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(Player);