import React from "react";
import {connect} from 'react-redux';


import {StyleSheet, Text, View, Image, TouchableHighlight} from "react-native";

function PlaylistButton(props) {
    return(
        <TouchableHighlight
        style={styles.container}
        onPress = {() => {
            props.onPress()
        }}>
            <View style={styles.horizontalDisplay}>
                <Image source={props.icon} style={styles.icon}/>
                <View style={styles.box}>
                    <Text style={styles.text}>{props.title}</Text>
                </View>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor : 'rgba(215, 215, 215, 1)',
        borderRadius: 5
    },
    box: {
        alignItems: 'center', 
        justifyContent: "space-around",
        paddingHorizontal: 15,
    },
    horizontalDisplay: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text: {
      fontSize: 16,
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
export default connect(mapStateToProps)(PlaylistButton);