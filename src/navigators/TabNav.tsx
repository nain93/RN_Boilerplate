import FeedStackNav, {
  FeedStackParamList,
} from '~/navigators/stackNav/FeedStackNav';
import HomeStackNav, {
  HomeStackParamList,
} from '~/navigators/stackNav/HomeStackNav';
import ProfileStackNav, {
  ProfileStackParamList,
} from '~/navigators/stackNav/ProfileStackNav';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type TabParamList = {
  HomeStackNav: NavigatorScreenParams<HomeStackParamList>;
  FeedStackNav: NavigatorScreenParams<FeedStackParamList>;
  ProfileStackNav: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackNavProps = NativeStackScreenProps<
  TabParamList,
  'HomeStackNav'
>;

const Tabs = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          // fontFamily: "SUIT-Regular",
          fontSize: 12,
          marginTop: 10,
          backgroundColor: 'transparent',
        },
        // tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          height: 77,
          paddingTop: 20,
          // borderTopLeftRadius: 30,
          // borderTopRightRadius: 30,
          shadowOffset: {
            width: 10,
            height: 8,
          },
          shadowOpacity: 0.4,
          shadowRadius: 10,
          elevation: 24,
        },
      }}>
      <Tabs.Screen
        name="HomeStackNav"
        component={HomeStackNav}
        options={{
          tabBarLabel: '홈',
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <Image
          //     style={{ width: 25, height: 16 }}
          //     source={null}
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="FeedStackNav"
        component={FeedStackNav}
        options={{
          tabBarLabel: '피드',
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <Image
          //     style={{ width: 25, height: 16 }}
          //     source={focused ? mainlogoIcon : graylogo}
          //   />
          // ),
        }}
      />
      <Tabs.Screen
        name="ProfileStackNav"
        component={ProfileStackNav}
        options={{
          tabBarLabel: '프로필',
          headerShown: false,
          // tabBarIcon: ({ focused }) => (
          //   <Image
          //     style={{ width: 25, height: 16 }}
          //     source={focused ? mainlogoIcon : graylogo}
          //   />
          // ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
