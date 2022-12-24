import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ROOT from './ROOT';

const myIcon = <Icon name="twitter" size={30} color="skyblue" />;

const App = () => {
  return (
    <NavigationContainer>
      <ROOT />
    </NavigationContainer>
  );
};

export default App;
