import React, {useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

import ButtonSimple from './ButtonSimple';

import {registerUser} from '../APIserver/User';

function SignUpPage(props) {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [Info, setInfo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.empty} />
      <View style={styles.box}>
        <Text style={styles.textButton}>Sign up</Text>
        <Text style={styles.textButton}>{Info}</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Pseudo"
          placeholderTextColor="rgba(169, 169, 169, 1)"
          onChangeText={(text) => setPseudo(text)}
          value={pseudo}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="rgba(169, 169, 169, 1)"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Confirm password"
          placeholderTextColor="rgba(169, 169, 169, 1)"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmpassword}
        />
      </View>
      <View style={styles.content}>
        <ButtonSimple
          style={styles.Button}
          styleText={styles.textButton}
          text="Enter"
          onPress={() => {
            if (password === confirmpassword) {
              registerUser(props, pseudo, password, setInfo);
            } else {
              setInfo('Password != confirm password');
            }
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
    width: '70 %',
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
    borderWidth: 1,
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

export default SignUpPage;
