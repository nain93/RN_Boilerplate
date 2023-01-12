import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeProps } from '~/navigators/home/HomeStackNav';

const Home = ({}: HomeProps) => {
  return (
    <TouchableOpacity>
      <Text>Home</Text>
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({});
