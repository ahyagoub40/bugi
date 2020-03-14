import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRScanner from './components/qr-scanner';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <QRScanner/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
