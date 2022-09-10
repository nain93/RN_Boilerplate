import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import React from 'react';
import Home from '~/screens/Home';

const Stack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          cardStyleInterpolator:
            Platform.OS === "android" ?
              CardStyleInterpolators.forFadeFromBottomAndroid :
              CardStyleInterpolators.forHorizontalIOS
        }
      }>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNav;

const styles = StyleSheet.create({});