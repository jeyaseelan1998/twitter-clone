import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Tweet from './Tweet';

const Feed = ({data}) => {
  const renderItem = ({item}) => <Tweet tweet={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
