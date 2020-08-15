import React, { useState } from "react";
import {connect} from 'react-redux';
import {StyleSheet, View, ScrollView, RefreshControl} from "react-native";

import Displayer from './Displayer';
import PlayerOverlay from './PlayerOverlay';

import {GetRandomListAlbum} from '../APIserver/Album';

function HomePage(props) {
    const [randDisplay, setrandDisplay] = useState(null);
    const [refreshing, setRefreshing] = useState(null);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        GetRandomListAlbum(5).then((result) => {
            setrandDisplay(result);
            console.log("result random ", result);
            setRefreshing(false);
        });
        }, []);

    if (!randDisplay) {
        GetRandomListAlbum(5).then((result) => {
            setrandDisplay(result);
            console.log("result random ", result);
        });
        return (
            <View>
                
            </View>
        )
    }

    return (
        <ScrollView 
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <Displayer {...props} title={"Favorite"} listItemId={props.profil.albumFavorite}/>
            <Displayer {...props} title={"Random"} listItemId={randDisplay} />
            <PlayerOverlay {...props} />
        </ScrollView>
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