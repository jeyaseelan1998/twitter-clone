import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const iconProvider = (size, color) => ({
  Home: <Ionicon name="home" size={size} color={color} />,
  Home_outline: <Ionicon name="home-outline" size={size} color={color} />,
  Search: <Ionicon name="search" size={size} color={color} />,
  Search_outline: <Ionicon name="search-outline" size={size} color={color} />,
  Bell: <MaterialIcon name="bell" size={size} color={color} />,
  Bell_outline: <MaterialIcon name="bell-outline" size={size} color={color} />,
  Envelope: <FontAwesome name="envelope" size={size} color={color} />,
  Envelope_outline: <FontAwesome name="envelope-o" size={size} color={color} />,
  Twitter: <FontAwesome name="twitter" size={size} color={color} />,
  ToggleOn: <FontAwesome name="toggle-on" size={size} color={color} />,
  ToggleOff: <FontAwesome name="toggle-off" size={size} color={color} />,
  Light: <Ionicon name="sunny-outline" size={size} color={color} />,
  Night: <Ionicon name="moon" size={size} color={color} />,
});
