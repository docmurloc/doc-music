import React, { useState } from "react";
import {connect} from 'react-redux';


import {StyleSheet, Text, TextInput , View, Image, Button, TouchableHighlight} from "react-native";

function ButtonSwitch(props) {
    const [state, setState] = useState(false);

    const changeState = () => {
        if (state) {
            props.onPressOn();
        } else {
            props.onPressOff();
        }
        setState(!state);
    }

    if (state) {
        return (
            <TouchableHighlight 
            style={styles.box}
            onPress={changeState}
            >
                <Image source={props.iconOn} style={styles.icon}/>
            </TouchableHighlight>
        )
    } else {
    return(
        <TouchableHighlight 
        style={styles.box}
        onPress={changeState}
        >
            <Image source={props.iconOff} style={styles.icon}/>
        </TouchableHighlight>
    )
    }
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
        //width : "100%",
        //flex: 1, 
        //alignItems: 'center', 
        //justifyContent: "space-around",
        //paddingHorizontal: 15,
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
        width : "40 %",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor : "green",
        borderRadius: 5
    },
    text: {
      fontSize: 16,
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
        width: 35,
        height: 35,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(ButtonSwitch);