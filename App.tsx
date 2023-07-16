import GlobalNav from '~/navigators/GlobalNav';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <GlobalNav />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
