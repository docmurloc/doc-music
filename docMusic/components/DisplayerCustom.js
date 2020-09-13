import React from 'react';
import {connect} from 'react-redux';

import CustomText from './CustomText'


import {StyleSheet, Text, View, FlatList} from 'react-native';

function DisplayerCustom(props) {
  if (!props.listItemId || props.listItemId.length <= 0) {
    return (
      <CustomText>
        <Text>No Item to display</Text>
      </CustomText>
    );
  }

  return (
    <View >
        {props.horizontal ? 
            <View style={styles.titleView}>
                <CustomText style={styles.title}>{props.title}</CustomText>
            </View> 
            :
             <></>}
        <View style={props.style}>
      <FlatList
        refreshControl={
            props.refreshControl
        }
        ListHeaderComponent={
            <>
                {props.ListHeaderComponent ? props.ListHeaderComponent : <></>}
                {!props.horizontal ? 
                <View style={styles.titleView}>
                    <CustomText style={styles.title}>{props.title}</CustomText>
                </View> 
                : 
                <></>}
            </>
        }
        horizontal={props.horizontal || false}
        numColumns={props.numColumns || 1}
        data={props.listItemId}
        renderItem={props.renderItem}
        keyExtractor={props.keyExtractor}
      />
      </View>
    </View>
  );
}
//({item}) => <Album {...props} id={item} />
//(item) => item
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
export default connect(mapStateToProps)(DisplayerCustom);
