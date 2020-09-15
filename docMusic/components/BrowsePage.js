import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import DisplayerCustom from './DisplayerCustom';
import Album from './Album';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';

import {GetRandomListAlbum, GetListAlbumByGenre} from '../APIserver/Album';

function BrowsePage(props) {
  const [randDisplay, setrandDisplay] = useState(null);

  const [pop, setPop] = useState(null);
  const [jazz, setJazz] = useState(null);
  const [rock, setRock] = useState(null);
  const [blues, setBlues] = useState(null);
  const [house, setHouse] = useState(null);
  const [indie, setIndie] = useState(null);
  const [metal, setMetal] = useState(null);
  const [classical, setClassical] = useState(null);
  const [dance, setDance] = useState(null);
  const [kpop, setkpop] = useState(null);

  const [refreshing, setRefreshing] = useState(null);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    GetRandomListAlbum(5).then((result) => {
      setrandDisplay(result);
    });
    setPop(await GetListAlbumByGenre('Pop'));

    setRefreshing(false);
  }, []);

  if (!randDisplay) {
    GetRandomListAlbum(5).then((result) => {
      setrandDisplay(result);
    });
    return <View />;
  }

  if (pop === null) {
    GetListAlbumByGenre('Pop').then((result) => {
      setPop(result);
    });
    return <View />;
  }

  if (jazz === null) {
    GetListAlbumByGenre('Jazz').then((result) => {
      setJazz(result);
    });
    return <View />;
  }

  if (rock === null) {
    GetListAlbumByGenre('Rock').then((result) => {
      setRock(result);
    });
    return <View />;
  }

  if (blues === null) {
    GetListAlbumByGenre('Blues').then((result) => {
      setBlues(result);
    });
    return <View />;
  }

  if (house === null) {
    GetListAlbumByGenre('House').then((result) => {
      setHouse(result);
    });
    return <View />;
  }

  if (indie === null) {
    GetListAlbumByGenre('Indie').then((result) => {
      setIndie(result);
    });
    return <View />;
  }

  if (metal === null) {
    GetListAlbumByGenre('Metal').then((result) => {
      setMetal(result);
    });
    return <View />;
  }

  if (classical === null) {
    GetListAlbumByGenre('Classical').then((result) => {
      setClassical(result);
    });
    return <View />;
  }

  if (dance === null) {
    GetListAlbumByGenre('Dance').then((result) => {
      setDance(result);
    });
    return <View />;
  }

  if (kpop === null) {
    GetListAlbumByGenre('K-pop').then((result) => {
      setkpop(result);
    });
    return <View />;
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <HeaderPage title={'Browse'} icon={require('../Images/browse.png')} />
      <DisplayerCustom
        {...props}
        title={'Pop'}
        listItemId={pop}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Jazz'}
        listItemId={jazz}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Rock'}
        listItemId={rock}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Blues'}
        listItemId={blues}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'House'}
        listItemId={house}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Indie'}
        listItemId={indie}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Metal'}
        listItemId={metal}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Classical'}
        listItemId={classical}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'Dance'}
        listItemId={dance}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <DisplayerCustom
        {...props}
        title={'K-pop'}
        listItemId={kpop}
        horizontal={true}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}
      />
      <PlayerOverlay {...props} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
});

export default BrowsePage;
