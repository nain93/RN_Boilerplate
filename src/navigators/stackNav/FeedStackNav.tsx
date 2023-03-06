import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';

import Feed from '~/screens/Feed';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

export type FeedStackParamList = {
  Feed: undefined;
};

export type FeedProps = NativeStackScreenProps<FeedStackParamList, 'Feed'>;

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

const styles = StyleSheet.create({});
