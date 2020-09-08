import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View} from 'react-native';

import ButtonSimple from './ButtonSimple'

function FirstPage(props) {
  
    return (
      <View style={styles.container}>
        <View style={styles.empty}></View>
        <View style={styles.box}>
            <ButtonSimple
            style={styles.Button}
            styleText={styles.textButton}
            text="Login"
            onPress={() => props.navigation.navigate('Login')}
            />
            <ButtonSimple
            style={styles.Button}
            styleText={styles.textButton}
            text="Sign up"
            onPress={() => props.navigation.navigate('SignUp')}
            />
        </View>
        <View style={styles.content}>
            <ButtonSimple
            style={styles.Button}
            styleText={styles.textButton}
            text="Skip"
            onPress={() => props.navigation.navigate('Login')}
            />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 1)',
    },
    box: {
      margin: 10,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 10,
      //backgroundColor: 'rgba(255, 52, 52, 1)',

    },
    content: {
        margin: 30,
        flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      //backgroundColor: 'rgba(52, 255, 52, 1)',

    },
    empty: {
        margin: 10,
        flex: 0.5,
        //alignItems: 'center',
        //justifyContent: 'space-around',
        //backgroundColor: 'rgba(52, 52, 255, 1)',

    },
    Button: {
        //alignItems: 'center',
        //justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
        //backgroundColor: 'rgba(100, 100, 100, 1)',  
    },
    textButton: {
      fontSize: 20,
      color: 'rgba(169, 169, 169, 1)',
    },
  });
  
  const mapStateToProps = (state) => {
    return state;
  };
  export default connect(mapStateToProps)(FirstPage);