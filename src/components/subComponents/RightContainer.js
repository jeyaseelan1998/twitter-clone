import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SIZES} from '../../constants/sizes';
import {COLORS} from '../../constants/colors';
import {iconProvider} from '../../constants/icons';
import Footer from './Footer';

const RightContainer = ({tweet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeader}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>50s</Text>
        <View style={styles.icon}>
          {iconProvider(SIZES.lg, COLORS.gray500).down}
        </View>
      </View>
      <View style={styles.tweetBody}>
        <Text style={styles.tweetcontent}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image source={{uri: tweet.image}} style={styles.image} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default RightContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.md,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginRight: 5,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  username: {
    marginRight: 5,
    color: COLORS.gray300,
  },
  createdAt: {
    marginRight: 5,
    color: COLORS.gray300,
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tweetBody: {
    marginTop: SIZES.sm,
  },
  tweetcontent: {
    lineHeight: 19,
    color: COLORS.black,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: SIZES.lg,
    overflow: 'hidden',
    marginVertical: SIZES.sm,
    resizeMode: 'contain',
  },
});
