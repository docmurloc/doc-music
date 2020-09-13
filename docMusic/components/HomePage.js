import React, {useState} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, RefreshControl} from 'react-native';

import DisplayerCustom from './DisplayerCustom';
import Album from './Album';
import PlayerOverlay from './PlayerOverlay';
import HeaderPage from './HeaderPage';
import ButtonSimple from './ButtonSimple';

import {GetRecentListAlbum} from '../APIserver/Album';

function HomePage(props) {
  const [recentDisplay, setrecentDisplay] = useState(null);
  const [refreshing, setRefreshing] = useState(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    GetRecentListAlbum().then((result) => {
      setrecentDisplay(result);
      setRefreshing(false);
    });
  }, []);

  if (!recentDisplay) {
    GetRecentListAlbum().then((result) => {
      setrecentDisplay(result);
    });
    return <View />;
  }

  return (
    <View
      style={styles.container}
      >
      <DisplayerCustom
        {...props}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }  
        ListHeaderComponent={
          <>
            <HeaderPage
            title={'Library'}
            icon={require('../Images/library.png')}
            />
            <ButtonSimple
            text={'Albums'}
            style={styles.button}
            styleText={styles.text}
            onPress={() => {
              props.navigation.navigate('AlbumPage');
            }}
            />
            <ButtonSimple
            text={'Songs'}
            style={styles.button}
            styleText={styles.text}
            onPress={() => {
              props.navigation.navigate('TrackPage');
            }}
            />
          </>
        }
        title={'Recently Added'}
        listItemId={recentDisplay}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => <Album {...props} id={item._id} />}
        keyExtractor={(item) => item._id}

      />
      <PlayerOverlay {...props} />
    </View>
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
