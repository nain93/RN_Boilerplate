import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import React from 'react';
import TabNavigator from '~/navigators/TabNav';

export type GlobalStackParamList = {
  TabNav: undefined;
};

export type TabNavProps = NativeStackScreenProps<
  GlobalStackParamList,
  'TabNav'
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
