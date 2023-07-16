import {
  CardStyleInterpolators,
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';
import TabNavigator, { TabParamList } from '~/navigators/TabNav';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Platform } from 'react-native';
import React from 'react';

export type GlobalStackParamList = {
  TabNav: undefined;
};

export type GlobalNavProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'HomeStackNav'>,
  StackNavigationProp<GlobalStackParamList>
>;

const Stack = createStackNavigator<GlobalStackParamList>();

const GlobalNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator:
            Platform.OS === 'android'
              ? CardStyleInterpolators.forFadeFromBottomAndroid
              : CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen
          name="TabNav"
          component={TabNavigator}
          // options={{
          //   headerShown: false
          // }}
        />
      </Stack.Navigator>
    </>
  );
};

export default GlobalNav;
