/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';


import SignInScreen from './src/screens/SiginInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import Navigation from './src/navigation';
import { AuthProvider } from './src/context/AuthContext';
import { DataProvider } from './src/GlobalState';




const App = () => {


  return (
    <SafeAreaView style={styles.root}>
      <AuthProvider>
        <DataProvider>
        <StatusBar backgroundColor="#06bcee" />
        <Navigation />
        </DataProvider>
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;
