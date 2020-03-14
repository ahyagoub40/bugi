import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

const QRScanner = () => {
  return (
    <View style={styles.container}>
      <Button
      title="QR-Scanner"
      onPress={
          () => this.props.navigation.navigate('ProductsDetails')}/>
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