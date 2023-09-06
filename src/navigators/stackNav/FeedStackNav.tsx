import {
  CardStyleInterpolators,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import Feed from '~/screens/Feed';
import { Platform } from 'react-native';
import React from 'react';

export type FeedStackParamList = {
  Feed: undefined;
};

export type FeedStackNavProps = StackScreenProps<FeedStackParamList>;

const Stack = createStackNavigator<FeedStackParamList>();

const FeedStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Feed"
        options={{
          headerShown: false,
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};

export default FeedStackNav;
