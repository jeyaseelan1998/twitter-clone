import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {iconProvider} from '../../constants/icons';
import {SIZES} from '../../constants/sizes';
import {COLORS} from '../../constants/colors';

import Button from './Button';

const NewTweetButton = ({style}) => {
  const navigation = useNavigation();
  const Feather = iconProvider(SIZES[8], COLORS.gray100).feather;
  const Plus = iconProvider(SIZES[4], COLORS.gray100).plus;

  const onPressHandler = () => {
    navigation.navigate('NewTweetScreen');
  };

  return (
    <Button onPress={onPressHandler} style={[styles.container, style]}>
      {Feather}
      <View style={styles.plus}>{Plus}</View>
    </Button>
  );
};

export default NewTweetButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: SIZES[15],
    height: SIZES[15],
    borderRadius: SIZES[14],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
  },
  plus: {
    position: 'absolute',
    top: SIZES[2],
    left: SIZES[2],
  },
});
