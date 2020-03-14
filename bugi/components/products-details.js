import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

const ProductsDetails = () => {
  return (
    <View style={styles.container}>
      <Button
      title="Continue shopping"
      onPress={
          () => this.props.navigation.navigate('QRScanner')}/>
      <Button
      title="Cart"
      onPress={
          () => this.props.navigation.navigate('')}/>
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

export default ProductsDetails;