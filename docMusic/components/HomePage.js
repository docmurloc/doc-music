import React, { useState } from "react";
import {connect} from 'react-redux';

import Displayer from './Displayer';

import {StyleSheet, Text, TextInput , View, Image, Button, KeyboardAvoidingView} from "react-native";

import NetInfo from "@react-native-community/netinfo";


async function registerAlbum(props, data) {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const bodyRequest =JSON.stringify ({
        title: "title",
        artist: "artist",
        artwork: "artwork",
        genre: "genre",
        trackListId: ["111","222"],
    });

    fetch('http://89.87.94.17:3000/albums/upload', {
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
        //setInfo(lol.status);
        //if (lol.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(lol);
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function registerImage() {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const bodyRequest =JSON.stringify ({
        url: "Url test",
    });

    fetch('http://89.87.94.17:3000/images/upload', {
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
        //setInfo(lol.status);
        //if (lol.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(lol);
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function GetRandomAlbum() {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    fetch('http://89.87.94.17:3000/albums/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((lol) => {
        console.log(lol);
        //setInfo(lol.status);
        //if (lol.status == "succes") {
            //props.navigation.navigate('Home');
        //}
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function GetRandomImage() {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    fetch('http://89.87.94.17:3000/images/random', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
    .then((response) => {
        return response.json();
    })
    .then((lol) => {
        console.log(lol);
        //setInfo(lol.status);
        //if (lol.status == "succes") {
            //props.navigation.navigate('Home');
        //}
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

function HomePage(props) {
    const [reponse, setreponse] = useState("");

    
    return (
        <View style={styles.container}>
            <Displayer {...props} title={"Favorite"}/>
            <Button
            title={"Uplaod"}
            onPress={() => registerAlbum(props, "lol")}
            />
            <Button
            title={"random"}
            onPress={() => GetRandomAlbum()}
            />
            <Button
            title={"Uplaod image"}
            onPress={() => registerImage()}
            />
            <Button
            title={"random image"}
            onPress={() => GetRandomImage()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        //alignItems: 'center', 
        justifyContent: 'flex-start'
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
export default connect(mapStateToProps)(HomePage);