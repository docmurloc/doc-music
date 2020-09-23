import React, {useState} from 'react';
import Store from '../Store/configureStore';

import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';

import {GetRandomAlbum, GetAlbumById} from '../APIserver/Album';
import {GetPlaylistById} from '../APIserver/Playlist';

import CustomText from './CustomText';

async function SetAlbumItem(setAlbum, id = null) {
  let answer = null;

  if (id < 100) {
    answer = await GetRandomAlbum();
  } else {
    answer = await GetAlbumById(id);
  }

  setAlbum(answer);
}

async function SetAlbumFavorite(idTrack : string) {
  const store = Store.getState();
  const arrayLike = store.profil.albumFavorite;

  const action = {type: 'STATE_FAVORITE_ALBUM', status: false};
  Store.dispatch(action);

  if (arrayLike.includes(idTrack)) {
    const action2 = {type: 'STATE_FAVORITE_ALBUM', status: true};
    Store.dispatch(action2);
  }
}

async function selectedAlbum(props, id : string, album) {
  let answer = await GetPlaylistById(id);
  SetAlbumFavorite(album);
  const action = {type: 'SET_CURRENT_PLAYLIST', playlist: answer};
  props.dispatch(action);

  props.navigation.navigate('playlist');
}

function Album(props) {
  const [album, setAlbum] = useState(null);
  if (!album) {
    SetAlbumItem(setAlbum, props.id);
    return (
      <View>
        <ActivityIndicator size="large" color="rgba(215, 215, 215, 1)" />
      </View>
    );
  } else {
    return (
      <TouchableHighlight
        onPress={() => selectedAlbum(props, album.playListId, album.id)}>
        <View style={styles.content}>
          <Image source={{uri: album.artwork}} style={styles.logo} />
          <View style={styles.content2}>
            <CustomText style={styles.title}>{album.title}</CustomText>
            <CustomText
              style={styles.text}
              numberOfLines={2}
              ellipsizeMode="tail">
              {album.genre} by {album.artist}
            </CustomText>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  content2: {
    padding: 5,
    width: 150,
  },
  content: {
    width: 180,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    textAlign: 'left',
  },
  title: {
    fontSize: 12,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default Album;
