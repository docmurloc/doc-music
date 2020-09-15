import React from 'react';

import CustomText from './CustomText';

import {StyleSheet, View, FlatList} from 'react-native';

function DisplayerCustom(props) {
  if (!props.listItemId || props.listItemId.length <= 0) {
    return <View />;
  }

  return (
    <View style={props.style}>
      {props.horizontal ? (
        <View style={styles.titleView}>
          <CustomText style={styles.title}>{props.title}</CustomText>
        </View>
      ) : (
        <></>
      )}
      <FlatList
        refreshControl={props.refreshControl}
        ListHeaderComponent={
          <>
            {props.ListHeaderComponent ? props.ListHeaderComponent : <></>}
            {!props.horizontal ? (
              <View style={styles.titleView}>
                <CustomText style={styles.title}>{props.title}</CustomText>
              </View>
            ) : (
              <></>
            )}
          </>
        }
        horizontal={props.horizontal || false}
        numColumns={props.numColumns || 1}
        data={props.listItemId}
        renderItem={props.renderItem}
        keyExtractor={props.keyExtractor}
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

export default DisplayerCustom;
