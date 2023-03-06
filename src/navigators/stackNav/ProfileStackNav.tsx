import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { Platform, StyleSheet } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Profile from '~/screens/Profile';
import React from 'react';

export type ProfileStackParamList = {
  Profile: undefined;
};

export type ProfileProps = NativeStackScreenProps<
  ProfileStackParamList,
  'Profile'
>;

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator:
          Platform.OS === 'android'
            ? CardStyleInterpolators.forFadeFromBottomAndroid
            : CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNav;

const styles = StyleSheet.create({});
