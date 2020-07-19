import React, { useState } from "react";
import {connect} from 'react-redux';

import Displayer from './Displayer';
import PlayerOverlay from './PlayerOverlay';

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
        playListId: "111"
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
    .then((data) => {
        //setInfo(data.status);
        //if (data.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(data);
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
        url: "https://www.cdiscount.com/pdt2/7/9/9/1/700x700/auc0715235459799/rw/dadju-poison-album-cd-2019-edition-limitee.jpg",
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
    .then((data) => {
        //setInfo(data.status);
        //if (data.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(data);
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function registerPlaylist() {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const bodyRequest =JSON.stringify ({
        title: "title playlist",
        author : "pierre antoine",
        artwork: "https://www.cdiscount.com/pdt2/7/9/9/1/700x700/auc0715235459799/rw/dadju-poison-album-cd-2019-edition-limitee.jpg",
        trackListId: ["111", "222"],
    });

    fetch('http://89.87.94.17:3000/playlists/upload', {
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
    .then((data) => {
        //setInfo(data.status);
        //if (data.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(data);
      //return json;
    })
    .catch((error) => {
        console.error("error :",error);
    });
    //props.navigation.navigate('Home');

    //console.log("fetch request :", response);
}

async function registerTrack() {
    const test = await NetInfo.fetch();
//
    console.log("testrequest :", test);

    const bodyRequest =JSON.stringify ({
        title: "title track",
        artist: "pierre antoine",
        album: "album id",
        genre: "track genre",
        url: "url sound",
        artwork: "https://www.cdiscount.com/pdt2/7/9/9/1/700x700/auc0715235459799/rw/dadju-poison-album-cd-2019-edition-limitee.jpg",
    });

    fetch('http://89.87.94.17:3000/tracks/upload', {
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
    .then((data) => {
        //setInfo(data.status);
        //if (data.status == "succes") {
        //    props.navigation.navigate('Home');
        //}
        console.log(data);
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
            <Displayer {...props} title={"Random"}/>
            <PlayerOverlay/>
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