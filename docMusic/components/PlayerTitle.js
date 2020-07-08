import React, { useState } from "react";
import {connect} from 'react-redux';


import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";


function PlayerTitle(props) {
    const [stateLike, setStateLike] = useState("");
    return (
        <View style={styles.container}>
            <Image source={require('../Images/dislikeOff.png')} style={styles.icon}/>
            <View style={styles.box}>
                <Text style={styles.title}
                    ellipsizeMode={"tail"}
                    numberOfLines={1}>Title Player</Text>
            </View>
            <Image source={require('../Images/likeOff.png')} style={styles.icon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width : "100%",
        alignItems: 'center', 
        justifyContent: 'space-around',
        padding: 5,
        flexDirection: 'row',
        backgroundColor: 'red'

    },
    box: {
        width : "40%",
        //flex: 1, 
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
        textAlign: "center",
        fontWeight: "bold"
      },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    icon: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(PlayerTitle);