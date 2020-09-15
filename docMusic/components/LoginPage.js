import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

import ButtonSimple from './ButtonSimple';
import CustomText from './CustomText';

import {loginUser} from '../APIserver/User';

function LoginPage(props) {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [Info, setInfo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.empty} />
      <View style={styles.box}>
        <CustomText style={styles.textButton}>Log in</CustomText>
        <CustomText style={styles.title}>{Info}</CustomText>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          placeholderTextColor="rgba(169, 169, 169, 1)"
          onChangeText={(text) => setPseudo(text)}
          value={pseudo}
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          placeholderTextColor="rgba(169, 169, 169, 1)"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.content}>
        <ButtonSimple
          style={styles.Button}
          styleText={styles.textButton}
          text="Enter"
          onPress={() => {
            loginUser(props, pseudo, password, setInfo);
          }}
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
    width: '70%',
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
  horizontalDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'rgba(38, 38, 38, 1)',
    color: 'rgba(169, 169, 169, 1)',
  },
  Button: {
    padding: 15,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    color: 'rgba(169, 169, 169, 1)',
  },
  empty: {
    margin: 10,
    flex: 0.5,
  },
});

export default LoginPage;
