import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';
import TrackPlayer from 'react-native-track-player';


import HistoryItem from './HistoryItem'

import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";

function createListHistory(history) {
    let result = [];

    let i = 0;

    for (i = 0; i < history.length; i++) {
        result = [
            ...result,
            {
            key: i.toString(),
            id: history[i]
        },
        ]
    }
    return result;
}

function HistoryPage(props) {
    const [event, setEvent] = useState(null);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            <View style={styles.box}>
                <FlatList
                    data={createListHistory(props.profil.trackHistoric)}
                    renderItem={({ item }) => <HistoryItem {...props} id={item.id}/>}
                    keyExtractor={item => item.key}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        padding: 20
    },
    box: {
        width : "100%",
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        paddingTop: 10,
        //backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
    },
    content: {
        //idth : "100%",
        margin : 30,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: "space-around",
        //backgroundColor : 'rgba(215, 215, 215, 0.9)',
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
        width: 200,
        height: 200,
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
export default connect(mapStateToProps)(HistoryPage);