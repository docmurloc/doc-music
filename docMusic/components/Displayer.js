import React, { useState } from "react";
import {connect} from 'react-redux';

import Album from './Album';

import {GetRandomAlbum} from '../APIserver/Album';


import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function Item({ title }) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
}


function Displayer(props) {

    //const [albums, setAlbums] = useState(props.data);
    //console.log("display album listItemId", props.listItemId);

    if (!props.listItemId || props.listItemId.length <= 0) {

        //SetAlbumRandom(setAlbums);
        return (
            <View>
                <Text>No album to display</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <FlatList
            horizontal={true}
            data={props.listItemId}
            renderItem={({ item }) => <Album {...props} id={item}/>}
            keyExtractor={item => item}
        />
        </View>
    )
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
        width: 65,
        height: 65,
        resizeMode: 'contain',
    },
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(Displayer);