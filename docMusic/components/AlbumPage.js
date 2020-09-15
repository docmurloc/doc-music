import React, {useState, useEffect} from 'react';

import ResearchBar from './ResearchBar';
import {GetAlbumByTitle, GetTopListAlbum} from '../APIserver/Album';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import AlbumItem from './albumItem';
import DisplayerCustom from './DisplayerCustom';

import {StyleSheet, View} from 'react-native';

function AlbumPage(props) {
  const [research, setresearch] = useState(null);

  useEffect(() => {
    async function getTitle(newResearch) {
      if (newResearch) {
        setAlbum(await GetAlbumByTitle(newResearch));
      } else {
        setAlbum(await GetTopListAlbum());
      }
    }
    getTitle(research);
  }, [research]);

  const [album, setAlbum] = useState(null);

  return (
    <View style={styles.container}>
      <HeaderPage title={'Albums'} icon={require('../Images/logoMusic.png')} />
      <ResearchBar onPress={setresearch} placeholder={'Album'} />
      <DisplayerCustom
        {...props}
        style={styles.FlatList}
        title={'Albums'}
        listItemId={album}
        horizontal={false}
        renderItem={({item}) => <AlbumItem {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <PlayerOverlay {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(227, 224, 215, 1)',
  },
  title: {
    fontSize: 30,
  },
  FlatList: {
    height: '70%',
    marginTop: 10,
  },
});

export default AlbumPage;
