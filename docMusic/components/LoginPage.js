import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TextInput , View, Image, Button} from "react-native";

import BackgroundImage from './backgroundImage'



function LoginPage(props) {

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <BackgroundImage/>
            <View style={styles.box}>
                <Image source={require('../Images/logoMusic.png')} style={styles.logo}/>
                <View style={styles.content}>
                    <Text style={styles.title}>Your music at your fingertips</Text>
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Pseudo"
                    onChangeText={text => setPseudo(text)}
                    value={pseudo}
                    />
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    />
                    <View style={styles.horizontalDisplay}>
                        <Button
                        title="LOGIN"
                        onPress={() => Alert.alert('Simple Button pressed')}
                        />
                        <Button
                          title="SIGN UP"
                          onPress={() => Alert.alert('Simple Button pressed')}
                        />
                    </View>
                    <Text style={styles.text}>Use your google profile</Text>
                    <Image source={require('../Images/logoGoogle.png')} style={styles.icon} />
                </View>
            </View>

        </View>
    );
};

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
export default connect(mapStateToProps)(LoginPage);