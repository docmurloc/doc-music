import React from "react";
import {connect} from 'react-redux';

import Album from './Album';

import {StyleSheet, Text, View, FlatList} from "react-native";

function Displayer(props) {

    if (!props.listItemId || props.listItemId.length <= 0) {
        return (
            <View>
                <Text>No album to display</Text>
            </View>
        )
    }

    return (
        <View>
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
    title: {
        fontSize: 30,
        fontWeight: "bold"
      },
    titleView: {
        padding: 10,
    }
  });

const mapStateToProps = (state) => {
    return state
  }  
export default connect(mapStateToProps)(Displayer);