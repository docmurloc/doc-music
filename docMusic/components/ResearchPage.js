import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import ResearchBar from './ResearchBar';
import {GetTrackByTitle} from '../APIserver/Track';
import {GetAlbumByTitle} from '../APIserver/Album';
import ResearchItem from './ResearchItem';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import CustomText from './CustomText';
import AlbumItem from './albumItem';
import DisplayerCustom from './DisplayerCustom';

import {StyleSheet, Text, View, FlatList} from 'react-native';

function ResearchPage(props) {
  const [research, setresearch] = useState(null);

  useEffect(() => {
    async function getTitle(newResearch) {
      if (newResearch) {
        setResult(await GetTrackByTitle(newResearch));
        setAlbum(await GetAlbumByTitle(newResearch));
      }
    }
    getTitle(research);
  }, [research]);

  const [result, setResult] = useState(null);
  const [album, setAlbum] = useState(null);

  return (
    <View style={styles.container}>
      <HeaderPage
      title={'Search'}
      icon={require('../Images/search.png')}
      />
      <ResearchBar onPress={setresearch} />
      <DisplayerCustom
        {...props}
        style={styles.FlatList}
        title={'Artists'}
        listItemId={result}
        horizontal={false}
        renderItem={({item}) => <ResearchItem {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
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
    //alignItems: 'center',
    //justifyContent: 'flex-start',
    backgroundColor: 'rgba(227, 224, 215, 1)',
  },
  title: {
    fontSize: 30,
    //textAlign: 'center',
  },
  FlatList: {
    height: 130,
    marginTop: 10,
  }
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ResearchPage);
