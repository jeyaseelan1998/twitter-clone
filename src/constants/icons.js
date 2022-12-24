import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const iconProvider = (size, color) => ({
  Home: <Ionicon name="home" size={size} color={color} />,
  Home_outline: <Ionicon name="home-outline" size={size} color={color} />,
  Search: <Ionicon name="search" size={size} color={color} />,
  Search_outline: <Ionicon name="search-outline" size={size} color={color} />,
  Bell: <MaterialIcon name="bell" size={size} color={color} />,
  Bell_outline: <MaterialIcon name="bell-outline" size={size} color={color} />,
  Envelope: <FontAwesome name="envelope" size={size} color={color} />,
  Envelope_outline: <FontAwesome name="envelope-o" size={size} color={color} />,
  twitter: <FontAwesome name="twitter" size={size} color={color} />,
  toggleOn: <FontAwesome name="toggle-on" size={size} color={color} />,
  toggleOff: <FontAwesome name="toggle-off" size={size} color={color} />,
  light: <Ionicon name="sunny-outline" size={size} color={color} />,
  night: <Ionicon name="moon" size={size} color={color} />,
  star: (
    <MaterialIcon name="star-four-points-outline" size={size} color={color} />
  ),
  down: <Ionicon name="chevron-down" size={size} color={color} />,
  message: <Feather name="message-circle" size={size} color={color} />,
  retweet: <EvilIcons name="retweet" size={size} color={color} />,
  share: <EvilIcons name="share-google" size={size} color={color} />,
  like_outline: <AntDesign name="hearto" size={size} color={color} />,
  like: <AntDesign name="heart" size={size} color={color} />,
});
