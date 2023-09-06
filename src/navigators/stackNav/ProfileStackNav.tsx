import {
  CardStyleInterpolators,
  StackScreenProps,
  createStackNavigator,
} from '@react-navigation/stack';

import { Platform } from 'react-native';
import Profile from '~/screens/Profile';
import React from 'react';

export type ProfileStackParamList = {
  Profile: undefined;
};

export type ProfileStackNavProps = StackScreenProps<ProfileStackParamList>;

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
