import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import Displayer from './Displayer';
import DisplayerCustom from './DisplayerCustom';
import Album from './Album';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import ButtonSimple from './ButtonSimple';

import {GetRandomListAlbum} from '../APIserver/Album';

function HomePage(props) {
  const [randDisplay, setrandDisplay] = useState(null);
  const [refreshing, setRefreshing] = useState(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    GetRandomListAlbum(5).then((result) => {
      setrandDisplay(result);
      setRefreshing(false);
    });
  }, []);

  if (!randDisplay) {
    GetRandomListAlbum(5).then((result) => {
      setrandDisplay(result);
    });
    return <View />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <HeaderPage
      title={'Library'}
      icon={require('../Images/browse.png')}
      />
      <ButtonSimple
      text={'Playlists'}
      style={styles.button}
      styleText={styles.text}
      />
      <ButtonSimple
      text={'Artists'}
      style={styles.button}
      styleText={styles.text}
      />
      <ButtonSimple
      text={'Albums'}
      style={styles.button}
      styleText={styles.text}
      />
      <ButtonSimple
      text={'Songs'}
      style={styles.button}
      styleText={styles.text}
      />
      <ButtonSimple
      text={'Downloaded Music'}
      style={styles.button}
      styleText={styles.text}
      />
      <DisplayerCustom
        {...props}
        title={'Favorite'}
        listItemId={props.profil.albumFavorite}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item} />}
        keyExtractor={(item) => item}

      />
      <DisplayerCustom
        {...props}
        title={'Recently Played'}
        listItemId={props.profil.albumFavorite}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item} />}
        keyExtractor={(item) => item}

      />
      <DisplayerCustom
        {...props}
        title={'Top Playlist'}
        listItemId={props.profil.albumFavorite}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item} />}
        keyExtractor={(item) => item}

      />
      <Displayer {...props} title={'Random'} listItemId={randDisplay} />
      <PlayerOverlay {...props} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(227, 224, 215, 1)',
  },
  button: {
    borderStyle: 'solid',
    borderBottomWidth: 2,
    marginHorizontal: 15,
    borderColor: 'rgba(169, 168, 163, 1)',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
  }
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HomePage);
