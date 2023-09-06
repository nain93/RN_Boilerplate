import {
  CardStyleInterpolators,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';
import TabNavigator, { TabParamList } from '~/navigators/TabNav';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { Platform } from 'react-native';
import React from 'react';

export type GlobalStackParamList = {
  TabNav: undefined;
};

export type GlobalNavProps = CompositeScreenProps<
  StackScreenProps<GlobalStackParamList>,
  BottomTabScreenProps<TabParamList>
>;

const Stack = createStackNavigator<GlobalStackParamList>();

const GlobalNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="TabNav" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default GlobalNav;
