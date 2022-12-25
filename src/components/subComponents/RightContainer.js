import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import moment from 'moment/moment';

import {SIZES} from '../../constants/sizes';
import {COLORS} from '../../constants/colors';
import {iconProvider} from '../../constants/icons';

import Footer from './Footer';
import Button from '../UI/Button';

const RightContainer = ({tweet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tweetHeader}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>
          {moment(tweet.createdAt).fromNow()}
        </Text>
        <Button style={styles.button}>
          {iconProvider(SIZES[4], COLORS.gray500).down}
        </Button>
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
    marginHorizontal: SIZES[2],
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
  button: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tweetBody: {
    marginTop: SIZES[1],
  },
  tweetcontent: {
    lineHeight: 19,
    color: COLORS.black,
  },
  image: {
    height: SIZES.xl,
    width: '100%',
    borderRadius: SIZES[4],
    overflow: 'hidden',
    marginVertical: SIZES[1],
    resizeMode: 'contain',
  },
});
