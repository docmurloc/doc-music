import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, ScrollView, RefreshControl} from 'react-native';

import Displayer from './Displayer';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';

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
      <Displayer
        {...props}
        title={'Favorite'}
        listItemId={props.profil.albumFavorite}
      />
      <Displayer {...props} title={'Random'} listItemId={randDisplay} />
      <PlayerOverlay {...props} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'rgba(227, 224, 215, 1)',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HomePage);
