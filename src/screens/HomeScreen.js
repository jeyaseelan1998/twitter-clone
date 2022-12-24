import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';

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
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
