import {View} from 'react-native';
import React from 'react';

import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';

import Tweet from '../components/Tweet';

import {tweets} from '../constants/mockTweet';

const HomeScreen = () => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {fontSize: SIZES.xl, color: COLORS.black},
  };
  return (
    <View style={styles.container}>
      <Tweet tweet={tweets[0]} />
    </View>
  );
};

export default HomeScreen;
