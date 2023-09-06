import {
  CardStyleInterpolators,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from '~/screens/Home';
import { Platform } from 'react-native';
import React from 'react';

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeStackNavProps = StackScreenProps<HomeStackParamList>;

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNav;
