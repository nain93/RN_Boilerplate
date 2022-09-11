import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { d2p, h2p } from '~/utils';
import HomeStackNav from '~/navigators/HomeStackNav';

const Tabs = createBottomTabNavigator();

const TabNavigator = () => {

  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          // fontFamily: "SUIT-Regular",
          fontSize: 12,
          marginTop: h2p(10),
          backgroundColor: "transparent"
        },
        // tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          height: h2p(77),
          paddingTop: h2p(20),
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          shadowOffset: {
            width: 10,
            height: 8,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 24,
        }
      }}
    >
      <Tabs.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarLabel: "홈",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              style={{ width: d2p(25), height: d2p(16) }}
            // source={focused ? mainlogoIcon : graylogo}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});