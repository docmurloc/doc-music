import React, { useState } from "react";
import {connect} from 'react-redux';

import NetInfo from "@react-native-community/netinfo";


import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

import BackgroundImage from './backgroundImage'

async function loginUser(props, newPseudo, newPassword, setInfo) {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const headerRequest =JSON.stringify ({
        pseudo : newPseudo,
        password: newPassword
    });

    fetch('http://89.87.94.17:3000/users/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'pseudo' : newPseudo,
            'password': newPassword

        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((answer) => {
        console.log(answer);
        if (answer.access_token) {
            const action = {type: 'CONNECTION', accessToken: answer.access_token}
            props.dispatch(action)

            props.navigation.navigate('Home');
        }
    })
    .catch((error) => {
        console.error("error :",error);
    });
    setInfo(lol.status);
}

function LoginPage(props) {

    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [Info, setInfo] = useState("");


    return (
        <View style={styles.container}>
            <BackgroundImage/>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.title}>Your music at your fingertips</Text>
                    <Text style={styles.title}>{Info}</Text>
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
                        onPress={() => loginUser(props, pseudo, password, setInfo)}
                        />
                        <Button
                          title="SIGN UP"
                          onPress={() => props.navigation.navigate('SignUp')}
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