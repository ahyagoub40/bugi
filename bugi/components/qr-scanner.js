import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

const QRScanner = () => {
  return (
    <View style={styles.container}>
      <Text>QR-Scanner</Text>
      <Button title="Cart"/>
      <Button title="Send"/>
    </View>

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

export default QRScanner;