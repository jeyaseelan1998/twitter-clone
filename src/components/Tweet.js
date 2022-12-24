import {StyleSheet, View} from 'react-native';
import React from 'react';

import {COLORS} from '../constants/colors';
import {SIZES} from '../constants/sizes';

import LeftContainer from './subComponents/LeftContainer';
import RightContainer from './subComponents/RightContainer';

const Tweet = ({tweet}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <LeftContainer user={tweet.user} />
        <RightContainer tweet={tweet} />
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.md,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray300,
  },
  subContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});
