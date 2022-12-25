import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS} from './src/constants/colors';
import {iconProvider} from './src/constants/icons';
import {SIZES} from './src/constants/sizes';

import ProfilePicture from './src/components/ProfilePicture';
import HomeScreen from './src/screens/HomeScreen';
import NewTweetScreen from './src/screens/NewTweetScreen';

const Tab = createBottomTabNavigator();

const BottomTapNavigator = () => {
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
    let Icon = iconProvider(SIZES[8], COLORS.blue);
    return Icon.twitter;
  };

  const headerRight = () => {
    const Icon = iconProvider(SIZES[8], COLORS.blue).star;
    return Icon;
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          headerTitle: headerTitle,
          headerLeft: () => (
            <ProfilePicture size={SIZES[10]} style={styles.profilePicture} />
          ),
          headerRight: headerRight,
          headerRightContainerStyle: {marginRight: SIZES[4]},
        })}
      />
      <Tab.Screen name="Search" component={Temp} />
      <Tab.Screen name="Bell" component={Temp} />
      <Tab.Screen name="Envelope" component={Temp} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();

const ROOT = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={'HomeScreen'} component={BottomTapNavigator} />
      <Stack.Screen name={'NewTweetScreen'} component={NewTweetScreen} />
    </Stack.Navigator>
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
    text: {fontSize: SIZES[6], color: COLORS.black},
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.name} screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePicture: {
    marginLeft: SIZES[4],
  },
});
