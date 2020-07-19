import React, { useState } from "react";
import {connect} from 'react-redux';

import ButtonIcon from './ButtonIcon';


import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

function runResearch(input) {
    console.log(input)
}

function ResearchBar(props) {
    const [research, setresearch] = useState("");
    
    return (
        <View style={styles.container}>
            <View
            style={styles.horizontalDisplay}>
                <View style={styles.box}>
                    <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            placeholder = "Title"
                            onChangeText={text => setresearch(text)}
                            value={research}
                    />
                </View>
                <ButtonIcon 
                icon={require('../Images/logoLoop.png')} 
                onPress={() => props.onPress(research)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        padding: 10,
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',

    },
    box: {
        //width : "100%",
        flex: 1, 
        //alignItems: 'center', 
        //justifyContent: "space-around",
        
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
        alignItems: 'center', 
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
export default connect(mapStateToProps)(ResearchBar);