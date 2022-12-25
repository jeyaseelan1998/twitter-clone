import {StyleSheet, View} from 'react-native';
import React from 'react';

import {SIZES} from '../../constants/sizes';

import ProfilePicture from '../ProfilePicture';

const LeftContainer = ({user}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture imgUrl={user.image} size={SIZES[12]} />
    </View>
  );
};

export default LeftContainer;

const styles = StyleSheet.create({
  container: {},
});
