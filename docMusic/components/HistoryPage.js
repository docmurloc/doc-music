import React from "react";
import {connect} from 'react-redux';
import {StyleSheet, Text, View, FlatList} from "react-native";

import HistoryItem from './HistoryItem'

function HistoryPage(props) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>History</Text>
            <View style={styles.box}>
                <FlatList
                    data={props.profil.trackHistoric}
                    renderItem={({ item }) => <HistoryItem {...props} id={item}/>}
                    keyExtractor={item => item}
                    initialNumToRender={5}
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
    title: {
        fontSize: 30,
        textAlign: "center"
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(HistoryPage);