import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {withAuthenticator} from 'aws-amplify-react-native';

import ROOT from './ROOT';

const App = () => {
  return (
    <NavigationContainer>
      <ROOT />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);
