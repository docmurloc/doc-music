import React, { useState } from "react";
import {connect} from 'react-redux';

import {StyleSheet, Text, TouchableHighlight , View, Image, Button, FlatList} from "react-native";

//props.navigation.navigate('SignUp')

async function GetRandomImage(setImage) {
    //const test = await NetInfo.fetch();
////
    //console.log("testrequest :", test);

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
    .then((answer) => {
        console.log(answer);
        setImage(answer.url);
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


function Album(props) {

    const [image, setImage] = useState(null);

    if (!image) {
        GetRandomImage(setImage);
        return (
            <View>
                <Text>Image not found</Text>
            </View>
        )
    }


    return (
        <TouchableHighlight
        onPress={() => props.navigation.navigate('playlist')}
        >
        <View style={styles.content}>
        <Image
         source={{uri :image}} 
         style={styles.logo}/>
            <View style={styles.content2}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text} numberOfLines={2} ellipsizeMode='tail'>{props.type} {props.author} {props.info}</Text>
            </View>

        </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    content2: {
        padding: 5,
        //backgroundColor: "yellow"
        //flex: 1, 
        //alignItems: 'center', 
        //justifyContent: 'center'
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
        width: 130,
        //height: 170,
        padding: 5,
        //idth : "100%",
        //margin : 30,
        //flex: 1, 
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
      fontSize: 12,
      textAlign: "left"

    },
    title: {
        fontSize: 12,
        textAlign: "left",
        fontWeight: "bold"

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
export default connect(mapStateToProps)(Album);