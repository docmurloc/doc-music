
import React, {useState} from 'react';
import { Image} from 'react-native';

function RandPic() {
    var nb = Math.floor(Math.random() * 3) + 1;
    var img = '';
  
    if (nb == 1)
      img = require('../Images/wallpaperMusic2.jpg');
    if (nb == 2)
      img = require('../Images/wallpaperMusic2.jpg');
    if (nb == 3)
      img = require('../Images/wallpaperMusic2.jpg');
    return img;
}

function BackgroundImage(props) {

  const [Img, onChangeImg] = useState(RandPic());

  return (
    <Image style={{width: '100%', height: '100%', resizeMode: 'cover', position: 'absolute'}}
    source={Img} />
  );

}

export default BackgroundImage;