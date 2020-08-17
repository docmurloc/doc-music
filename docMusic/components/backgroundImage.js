import React from 'react';
import {Image, StyleSheet} from 'react-native';

function RandPic() {
  var nb = Math.floor(Math.random() * 3) + 1;
  var img = '';

  if (nb === 1) {
    img = require('../Images/wallpaperMusic2.jpg');
  }
  if (nb === 2) {
    img = require('../Images/wallpaperMusic2.jpg');
  }
  if (nb === 3) {
    img = require('../Images/wallpaperMusic2.jpg');
  }
  return img;
}

function BackgroundImage(props) {
  const Img = RandPic();

  return <Image style={styles.background} source={Img} />;
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
});

export default BackgroundImage;
