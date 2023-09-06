import { Text, View } from 'react-native';

import { HomeStackNavProps } from '~/navigators/stackNav/HomeStackNav';
import React from 'react';

const Home = ({}: HomeStackNavProps) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
