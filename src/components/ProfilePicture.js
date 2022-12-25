import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {SIZES} from '../constants/sizes';

const url =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrFreR1vBsHpmIybfANeQEc7yaNemXqnM7JNcuDjN&s';

const ProfilePicture = ({imgUrl = url, size, style}) => {
  const image = {
    height: size || SIZES[6],
    width: size || SIZES[6],
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
    borderRadius: SIZES[6],
  },
});
