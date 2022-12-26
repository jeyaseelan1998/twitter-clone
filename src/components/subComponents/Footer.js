import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {iconProvider} from '../../constants/icons';
import {COLORS} from '../../constants/colors';
import {SIZES} from '../../constants/sizes';

import Button from '../UI/Button';

const Footer = ({tweet}) => {
  return (
    <View style={styles.container}>
      <Button style={styles.button}>
        <Text>{iconProvider(SIZES[5], COLORS.gray500).message}</Text>
        <Text style={styles.number}>{tweet.numberOfComments}</Text>
      </Button>
      <Button style={styles.button}>
        <Text>{iconProvider(SIZES[7], COLORS.gray500).retweet}</Text>
        <Text style={styles.number}>{tweet.numberOfRetweets}</Text>
      </Button>
      <Button style={styles.button}>
        <Text>{iconProvider(SIZES[5], COLORS.gray500).like_outline}</Text>
        <Text style={styles.number}>{tweet.numberOfLikes}</Text>
      </Button>
      <Button style={styles.button}>
        <Text>{iconProvider(SIZES[7], COLORS.gray00).share}</Text>
      </Button>
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    color: COLORS.gray500,
    marginLeft: SIZES[1],
    textAlign: 'center',
  },
});
