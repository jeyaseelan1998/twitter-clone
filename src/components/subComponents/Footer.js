import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {iconProvider} from '../../constants/icons';
import {COLORS} from '../../constants/colors';
import {SIZES} from '../../constants/sizes';

const Footer = ({tweet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text>{iconProvider(SIZES.xl, COLORS.gray500).message}</Text>
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </View>
      <View style={styles.group}>
        <Text>{iconProvider(SIZES.xxl, COLORS.gray500).retweet}</Text>
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </View>
      <View style={styles.group}>
        <Text>{iconProvider(SIZES.xl, COLORS.gray500).like_outline}</Text>
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </View>
      <View style={styles.group}>
        <Text>{iconProvider(SIZES.xxl, COLORS.gray00).share}</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    color: COLORS.gray500,
    marginLeft: SIZES.sm,
    textAlign: 'center',
  },
});
