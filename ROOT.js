import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS} from './src/constants/colors';
import {iconProvider} from './src/constants/icons';
import {SIZES} from './src/constants/sizes';

import HomeScreen from './src/screens/HomeScreen';
import ProfilePicture from './src/components/ProfilePicture';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarShowLabel: false,
  tabBarIcon: ({focused, color, size}) => {
    let Icon = iconProvider(size, color);
    return focused ? Icon[route.name] : Icon[`${route.name}_outline`];
  },
  tabBarActiveTintColor: COLORS.blue,
  tabBarInactiveTintColor: COLORS.gray500,
  headerTitleAlign: 'center',
});

const headerTitle = () => {
  let Icon = iconProvider(SIZES.xxl, COLORS.blue);
  return Icon.twitter;
};

const headerRight = () => {
  const Icon = iconProvider(SIZES.xxl, COLORS.blue).star;
  return Icon;
};

const ROOT = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          headerTitle: headerTitle,
          headerLeft: () => (
            <ProfilePicture size={40} style={styles.profilePicture} />
          ),
          // headerLeftContainerStyle: {marginLeft: SIZES.lg},
          headerRight: headerRight,
          headerRightContainerStyle: {marginRight: SIZES.lg},
        })}
      />
      <Tab.Screen name="Search" component={Temp} />
      <Tab.Screen name="Bell" component={Temp} />
      <Tab.Screen name="Envelope" component={Temp} />
    </Tab.Navigator>
  );
};

export default ROOT;

// this section will be removed in future
const Temp = ({route}) => {
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
      <Text style={styles.text}>{route.name} screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    marginLeft: SIZES.lg,
  },
});
