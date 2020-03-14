import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRScanner from './components/qr-scanner';

export default function App() {
  return (
    <QRScanner/>
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
