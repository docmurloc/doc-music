import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import ResearchBar from './ResearchBar';
import {GetTrackByTitle} from '../APIserver/Track';
import ResearchItem from './ResearchItem';
import PlayerOverlay from './PlayerOverlay';

import {StyleSheet, Text, View, FlatList} from 'react-native';

function ResearchPage(props) {
  const [research, setresearch] = useState(null);

  useEffect(() => {
    async function getTitle(newResearch) {
      if (newResearch) {
        setResult(await GetTrackByTitle(newResearch));
      }
    }
    getTitle(research);
  }, [research]);

  const [result, setResult] = useState(null);

  return (
    <View style={styles.container}>
      <ResearchBar onPress={setresearch} />
      <Text style={styles.title}>Result</Text>
      <FlatList
        data={result}
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
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ResearchPage);
