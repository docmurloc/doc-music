import React from 'react';
import {connect} from 'react-redux';

import Album from './Album';
import CustomText from './CustomText';

import {StyleSheet, Text, View, FlatList} from 'react-native';

function Displayer(props) {
  if (!props.listItemId || props.listItemId.length <= 0) {
    return (
      <CustomText>
        <Text>No album to display</Text>
      </CustomText>
    );
  }

  return (
    <View>
      <View style={styles.titleView}>
        <CustomText style={styles.title}>{props.title}</CustomText>
      </View>
      <FlatList
        horizontal={true}
        //numColumns={2}
        data={props.listItemId}
        renderItem={({item}) => <Album {...props} id={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleView: {
    padding: 10,
  },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Displayer);
