import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {iconProvider} from '../constants/icons';
import {SIZES} from '../constants/sizes';
import {COLORS} from '../constants/colors';
import Button from '../components/UI/Button';
import ProfilePicture from '../components/ProfilePicture';
import {useNavigation} from '@react-navigation/native';

const NewTweetScreen = () => {
  const [tweet, setTweet] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigation = useNavigation();
  const close = iconProvider(SIZES[8], COLORS.blue).close;
  const onPost = () => {
    console.log(tweet, imageUrl);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button onPress={() => navigation.goBack()}>{close}</Button>
        <Button style={styles.btn} onPress={onPost}>
          <Text style={styles.btnText}>Tweet</Text>
        </Button>
      </View>
      <View style={styles.tweetContainer}>
        <View style={styles.profilePicture}>
          <ProfilePicture size={SIZES[10]} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.tweet}
            placeholder={"What's happening..."}
            multiline={true}
            numberOfLines={3}
            onChangeText={setTweet}
            value={tweet}
          />
          <TextInput
            style={styles.imageUrl}
            placeholder={'Image url(Optional)'}
            onChangeText={setImageUrl}
            value={imageUrl}
          />
        </View>
      </View>
    </View>
  );
};

export default NewTweetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: SIZES[4],
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingVertical: SIZES[4],
  },
  btn: {
    backgroundColor: COLORS.blue,
    borderRadius: SIZES[5],
  },
  btnText: {
    fontSize: SIZES[4],
    color: COLORS.gray100,
    paddingHorizontal: SIZES[5],
    paddingVertical: SIZES[2],
  },
  tweetContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  profilePicture: {
    marginTop: SIZES[2],
  },
  inputContainer: {
    flex: 1,
    marginLeft: SIZES[2],
  },
  tweet: {
    height: SIZES.sm,
    maxHeight: SIZES.xxxl,
    textAlignVertical: 'top',
    fontSize: SIZES[4],
  },
  imageUrl: {},
});
