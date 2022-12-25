import {StyleSheet, View} from 'react-native';
import React from 'react';

import {tweets} from '../constants/mockTweet';

import Feed from '../components/Feed';
import NewTweetButton from '../components/UI/NewTweetButton';
import {SIZES} from '../constants/sizes';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Feed data={tweets} />
      <NewTweetButton style={styles.newTweetBtn} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTweetBtn: {
    bottom: SIZES[4],
    right: SIZES[4],
  },
});
