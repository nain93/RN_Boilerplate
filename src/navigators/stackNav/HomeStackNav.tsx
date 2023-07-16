import {
  CardStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { GlobalStackParamList } from '~/navigators/GlobalNav';
import Home from '~/screens/Home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { TabParamList } from '~/navigators/TabNav';

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeStackNavProps = NativeStackScreenProps<
  HomeStackParamList,
  'Home'
>;

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

const styles = StyleSheet.create({});
