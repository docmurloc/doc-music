import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import ResearchBar from './ResearchBar';
import {GetTrackByTitle, GetListTopTrack} from '../APIserver/Track';
import {GetAlbumByTitle, GetTopListAlbum} from '../APIserver/Album';

import ResearchItem from './ResearchItem';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import CustomText from './CustomText';
import AlbumItem from './albumItem';
import DisplayerCustom from './DisplayerCustom';

import {StyleSheet, Text, View, FlatList} from 'react-native';

function TrackPage(props) {
  const [research, setresearch] = useState(null);

  useEffect(() => {
    async function getTitle(newResearch) {
      if (newResearch) {
        setSongs(await GetTrackByTitle(newResearch));
      } else {
        setSongs(await GetListTopTrack());
      }
    }
    getTitle(research);
  }, [research]);

  const [songs, setSongs] = useState(null);

  return (
    <View style={styles.container}>
      <HeaderPage
      title={'Songs'}
      icon={require('../Images/logoMusic.png')}
      />
      <ResearchBar onPress={setresearch} placeholder={'Songs'}/>
      <DisplayerCustom
        {...props}
        style={styles.FlatList}
        title={'Songs'}
        listItemId={songs}
        horizontal={false}
        renderItem={({item}) => <ResearchItem {...props} id={item._id} />}
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
    height: "70%",
    marginTop: 10,
    //backgroundColor:'red'
  }
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(TrackPage);