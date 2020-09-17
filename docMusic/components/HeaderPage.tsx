import React from 'react';
import {StyleSheet, Image, View, ImageSourcePropType} from 'react-native';

import CustomText from './CustomText';

type HeaderPageProps = {
  title: string,
  icon: ImageSourcePropType
}

function HeaderPage(props : HeaderPageProps) {
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

export default HeaderPage;
