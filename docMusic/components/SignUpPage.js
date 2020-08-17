import React, {useState} from 'react';
import {connect} from 'react-redux';

import NetInfo from '@react-native-community/netinfo';

import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

import BackgroundImage from './backgroundImage';

async function registerUser(props, newPseudo, newPassword, setInfo) {
  const test = await NetInfo.fetch();
  //
  console.log('testrequest :', test);

  const bodyRequest = JSON.stringify({
    pseudo: newPseudo,
    password: newPassword,
  });

  fetch('http://89.87.94.17:3000/users/register', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: bodyRequest,
  })
    .then((response) => {
      return response.json();
    })
    .then((lol) => {
      setInfo(lol.status);
      if (lol.status === 'succes') {
        props.navigation.navigate('Home');
      }
      console.log(lol);
      //return json;
    })
    .catch((error) => {
      console.error('error :', error);
    });
  //props.navigation.navigate('Home');

  //console.log("fetch request :", response);
}

function SignUpPage(props) {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [Info, setInfo] = useState('');

  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View style={styles.box}>
        <View style={styles.content}>
          <Text style={styles.title}>At one step of your dream</Text>
          <Text style={styles.title}>{Info}</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Pseudo"
            onChangeText={(text) => setPseudo(text)}
            value={pseudo}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirm password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmpassword}
          />
          <View style={styles.horizontalDisplay}>
            <Button
              title="REGISTER"
              onPress={() => registerUser(props, pseudo, password, setInfo)}
            />
            <Button
              title="SIGN IN"
              onPress={() => props.navigation.navigate('Login')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  content: {
    margin: 30,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(215, 215, 215, 0.9)',
    borderRadius: 20,
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
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(SignUpPage);
