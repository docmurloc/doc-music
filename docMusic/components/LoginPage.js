import React, { useState } from "react";
import {connect} from 'react-redux';
import {StyleSheet, Text, TextInput , View, Button} from "react-native";

import {loginUser} from '../APIserver/User'

import BackgroundImage from './backgroundImage'

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
    },
    content: {
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
    },
    title: {
        fontSize: 30,
        textAlign: "center"
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(LoginPage);