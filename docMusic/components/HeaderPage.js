import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Image, View} from 'react-native';

import CustomText from './CustomText';

function HeaderPage(props) {
  return (
    <View style={styles.box}>
      <View style={styles.imageView}>
        <Image source={props.icon} style={styles.icon} />
      </View>
      <CustomText style={styles.text}>{props.title}</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginHorizontal: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'rgba(112, 112, 112, 1)',
  },
  text: {
    fontSize: 50,
  },
  imageView: {
    paddingHorizontal: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HeaderPage);
