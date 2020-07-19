import React, { useState, useEffect} from "react";
import {connect} from 'react-redux';

import ResearchBar from './ResearchBar'
import {GetTrackByTitle} from '../APIserver/Track';
import ResearchItem from './ResearchItem';
import PlayerOverlay from './PlayerOverlay';


import {StyleSheet, Text, TextInput , View, Image, Button, FlatList} from "react-native";


function ResearchPage(props) {
    const [research, setresearch] = useState(null);

    useEffect(() => {
        async function getTitle(research) {
            if (research) {
                setResult(await GetTrackByTitle(research));
            }
        }
        getTitle(research);

    }, [research]);

    const [result, setResult] = useState(null);

    console.log(result)

    
    return (
        <View style={styles.container}>
            <ResearchBar
            onPress={setresearch}/>
            <Text
            style={styles.title}>Result</Text>
            <FlatList
                    data={result}
                    renderItem={({ item }) => <ResearchItem {...props} id={item._id}/>}
                    keyExtractor={item => item._id}
            />
            <PlayerOverlay {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start'
    },
    box: {
        width : "100%",
        flex: 1, 
        //alignItems: 'center', 
        //justifyContent: "space-around",
        backgroundColor : 'rgba(191, 155, 63, 0.5)',
        
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
        backgroundColor : "red"
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
export default connect(mapStateToProps)(ResearchPage);