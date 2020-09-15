import React from 'react';
import {StyleSheet, View} from 'react-native';

import ButtonSimple from './ButtonSimple';

function FirstPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.empty} />
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
      <View style={styles.content} />
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
  },
  content: {
    margin: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  empty: {
    margin: 10,
    flex: 0.5,
  },
  Button: {
    padding: 15,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: 'rgba(169, 169, 169, 1)',
  },
});

export default FirstPage;
