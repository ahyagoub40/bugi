import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { navigation } from '@react-navigation/stack';
import QRCodeScanner from 'react-native-qrcode-scanner';

const QRScanner = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text>QR-Scanner</Text>
      <QRCodeScanner
        onRead={this.onSuccess}
        flashMode={QRCodeScanner.Constants.FlashMode.torch}      
        topContent={
          <Text style={styles.centerText}>
            Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
  
      <Button title="Send" onPress={ () => navigate('ProductsDetails')}/>
      <Button title="Cart" onPress={ () => navigate('ProductsDetails')}/>
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