import React, { useState } from "react";
import {connect} from 'react-redux';
import {StyleSheet, View} from "react-native";

import Displayer from './Displayer';
import PlayerOverlay from './PlayerOverlay';


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

function SetAlbumRandom(nbItem) {


    let albums = [];

    let i = 0

    for (i = 0; i < nbItem; i++) {
        albums = [...albums, i];
    }

    return albums;
}

function HomePage(props) {
    const [randDisplay, setrandDisplay] = useState(SetAlbumRandom(2));

    const DATA = ['5f06563efff14000085ced8e', '5f065644fff14000085ced90'];

    return (
        <View style={styles.container}>
            <Displayer {...props} title={"Favorite"} listItemId={props.profil.albumFavorite}/>
            <Displayer {...props} title={"Random"} listItemId={DATA} />
            <PlayerOverlay {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start'
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(HomePage);