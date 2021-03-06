import React, {useState, useEffect} from 'react';

import ResearchBar from './ResearchBar';
import {GetTrackByTitle} from '../APIserver/Track';
import {GetAlbumByTitle} from '../APIserver/Album';
import ResearchItem from './ResearchItem';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import AlbumItem from './albumItem';
import DisplayerCustom from './DisplayerCustom';

import {StyleSheet, View} from 'react-native';

function ResearchPage(props) {
  const [research, setresearch] = useState(null);

  useEffect(() => {
    async function getTitle(newResearch) {
      if (newResearch) {
        setResult(await GetTrackByTitle(newResearch));
        setAlbum(await GetAlbumByTitle(newResearch));
      } else {
        setResult(null);
        setAlbum(null);
      }
    }
    getTitle(research);
  }, [research]);

  const [result, setResult] = useState(null);
  const [album, setAlbum] = useState(null);

  return (
    <View style={styles.container}>
      <HeaderPage title={'Search'} icon={require('../Images/search.png')} />
      <ResearchBar onPress={setresearch} placeholder={'Track or album'} />
      <DisplayerCustom
        {...props}
        style={styles.FlatList}
        title={'Tracks'}
        listItemId={result}
        horizontal={false}
        renderItem={({item}) => <ResearchItem {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
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
    height: '35%',
    marginTop: 10,
  },
});

export default ResearchPage;
