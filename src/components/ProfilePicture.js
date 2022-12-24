import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/sizes';

const url = 'https://pixlr.com/images/index/remove-bg.webp';

const ProfilePicture = ({imgUrl = url, size, style}) => {
  const image = {
    height: size || SIZES.xl,
    width: size || SIZES.xl,
  };
  return (
    <Image
      source={{
        uri: imgUrl,
      }}
      resizeMode="contain"
      style={[styles.image, image, style]}
    />
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  image: {
    borderRadius: SIZES.xl,
  },
});
