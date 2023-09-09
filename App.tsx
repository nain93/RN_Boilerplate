import GlobalNav from '~/navigators/GlobalNav';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider style={styles.safeAreaView}>
      <NavigationContainer>
        <GlobalNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default App;
