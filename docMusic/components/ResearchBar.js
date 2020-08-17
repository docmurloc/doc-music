import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, TextInput, View} from 'react-native';

import ButtonIcon from './ButtonIcon';

function ResearchBar(props) {
  const [research, setresearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.horizontalDisplay}>
        <View style={styles.box}>
          <TextInput
            style={styles.textInput}
            placeholder="Title"
            onChangeText={(text) => setresearch(text)}
            value={research}
          />
        </View>
        <ButtonIcon
          icon={require('../Images/logoLoop.png')}
          onPress={() => props.onPress(research)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
  box: {
    flex: 1,
  },
  horizontalDisplay: {
    width: '70 %',
    flexDirection: 'row',
    alignItems: 'center',
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
export default connect(mapStateToProps)(ResearchBar);
