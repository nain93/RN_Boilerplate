import { StyleSheet, Text, View } from 'react-native';

import { HomeStackNavProps } from '~/navigators/TabNav';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<HomeStackNavProps>();
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
