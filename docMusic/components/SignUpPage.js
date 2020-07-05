import React, { useState } from "react";
import {connect} from 'react-redux';

import NetInfo from "@react-native-community/netinfo";


import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

import BackgroundImage from './backgroundImage'

async function registerUser(props, newPseudo, newPassword) {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const bodyRequest =JSON.stringify ({
        pseudo : newPseudo,
        password: newPassword
    });

    fetch('http://89.87.94.17:3000/users/register', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: bodyRequest
    })
    .then((response) => {
        return response.json();
    })
    .then((lol) => {
        console.log(lol);
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

function SignUpPage(props) {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
        <View style={styles.container}>
            <BackgroundImage/>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.title}>At one step of your dream</Text>
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
                    <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder = "Confirm password"
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmpassword}
                    />
                    <View style={styles.horizontalDisplay}>
                        <Button
                        title="REGISTER"
                        onPress={() => registerUser(props, pseudo, password)}
                        />
                        <Button
                          title="SIGN IN"
                          onPress={() => props.navigation.navigate('Login')}
                        />
                    </View>
                </View>
            </View>

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
export default connect(mapStateToProps)(SignUpPage);